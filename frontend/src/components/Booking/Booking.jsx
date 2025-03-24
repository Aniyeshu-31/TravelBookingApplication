import React, { useState, useContext } from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from "../../utils/config";
import { loadStripe } from '@stripe/stripe-js'
const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourname: title,
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: '',
  })

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const serviceFee = 10
  const totalAmount = (booking.guestSize > 0) ? Number(price) * Number(booking.guestSize) + Number(serviceFee) : 0;

  //send data to the server
   const handleClick = async (e) => {
     e.preventDefault()

     if (!user) {
       return alert('Please Sign In')
     }

     if (!booking.fullName || !booking.phone || !booking.bookAt) {
       return alert('Please fill all fields before proceeding.')
     }

     try {
       const stripe = await loadStripe(
         'pk_test_51Mpme7SHEfH1Sdnx8ocZgzbXyKI8kFvC2pcFWk797xA6VdZGdr63hrzAGonltZUcKIpiMZ6oFyfsvDV6Ny7Yob0N00wFsGhGqF'
       )

       const body = {
         bookingDetails: [{ ...booking, price }],
       }

       const res = await fetch(`${BASE_URL}/booking`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         credentials: 'include',
         body: JSON.stringify(body),
       })

       if (!res.ok) {
         const errorData = await res.json()
         console.error('Backend Error:', errorData)
         throw new Error(errorData.message || 'Stripe session creation failed.')
       }

       const session = await res.json()

       if (!session.sessionId) {
         throw new Error('Stripe session creation failed.')
         navigate('/retry-booking');
       }

       const result = await stripe.redirectToCheckout({
         sessionId: session.sessionId,
       })

       if (result.error) {
         alert('Payment failed. Please try again.')
         navigate('/retry-booking');
       }
       navigate(`/thank-you?session_id=${session.sessionId}`);
     } catch (err) {
       console.error('❌ Payment Error:', err.message)
       alert(`Error: ${err.message}`)
     }
   }


  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          {' '}
          ${price / 100} <span> /per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center ">
          <i class="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/* ============== booking form ================= */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* ============== booking end ================= */}

      {/* ============== booking bottom ================= */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price / 100} <i class="ri-close-line"></i> 1 person
            </h5>
            <span> ${price / 100}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5> Service charges </h5>
            <span> ${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total </h5>
            <span> ${totalAmount / 100}</span>
          </ListGroupItem>
        </ListGroup>

        {/* <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          {' '}
          Book Now
        </Button> */}

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          {' '}
          Pay Total ${(totalAmount == 0) ? "" : totalAmount / 100}
        </Button>
      </div>
    </div>
  )
}

export default Booking
