import React, { useState, useContext, useEffect } from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../utils/config'
import { RAZORPAY_KEY_ID } from '../../utils/config'
import { loadRazorpayScript } from '../../utils/razorpay'
const Booking = ({ tour, avgRating }) => {
  useEffect(() => {
    loadRazorpayScript()
  }, [])
  const { price, reviews, title } = tour
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: '',
    guestSize: '',
    phone: '',
    startAt: '',
    endAt: '',
    totalAmount: '',
  })
  const totalAmount =
    booking.guestSize > 0 ? Number(price) * Number(booking.guestSize) + 100 : 0
  console.log(user)
  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()

    if (!user) {
      return alert('Please Sign In')
    }

    if (!booking.fullName || !booking.phone || !booking.startAt || !booking.endAt) {
      return alert('Please fill all fields before proceeding.')
    }
    const calculatedAmount =
      booking.guestSize > 0
        ? Number(price) * Number(booking.guestSize) + 100
        : 0
    try {
      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...booking,
          totalAmount: calculatedAmount,
        }),
      })

      let data
      try {
        data = await res.json()
      } catch (jsonError) {
        const text = await res.text()
        console.error('Invalid JSON response:', text)
        throw new Error('Server returned invalid JSON')
      }

      console.log('Server response:', data)
      if (!res.ok) {
        throw new Error(data.message || 'Booking request failed')
      }

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: data.data.amount,
        currency: 'INR',
        name: booking.tourName,
        description: 'Tour Reservation Payment',
        order_id: data.data.id,
        handler: async function (response) {
          console.log(response)
          try {
            const verifyRes = await fetch(`${BASE_URL}/booking/verify`, {
              method: 'POST',
              credentials:'include',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                bookingDetails: {
                  ...booking,
                  AmountToPay: Number(calculatedAmount),
                },
              }),
            })

            const verifyData = await verifyRes.json()
            console.log(verifyData.message)
            if (!verifyRes.ok) {
              throw new Error(
                verifyData.message || 'Payment verification failed'
              )
            }
            setTimeout(() => {
              navigate('/thank-you')
            }, 500)
          } catch (err) {
            console.error('Verification Error:', err)
            alert('Payment succeeded but could not verify booking.')
          }
        },
        prefill: {
          name: booking.fullName,
          email: user.email,
          contact: booking.phone,
        },
        theme: {
          color: '#3399cc',
        },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
      rzp.on('payment.failed', function (response) {
        console.error('Payment Failed:', response.error)
        alert('Payment failed. Please try again.')
        navigate('/retry-booking')
        return
      })
    } catch (error) {
      console.error('Booking Error:', error)
      alert('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          {' '}
          ₹{price} <span> /per person</span>
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
          <FormGroup className="d-flex align-items-center gap-1">
            <input
              type="date"
              placeholder=""
              id="startAt"
              required
              onChange={handleChange}
            />
            <span style={{ fontWeight: 'bold' }}>to</span>
            <input
              type="date"
              placeholder=""
              id="endAt"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              value={booking.guestSize < 0 ? 0 : booking.guestSize}
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
              ₹{price} <i class="ri-close-line"></i>{' '}
              {booking.guestSize < 0 ? 0 : booking.guestSize} person
            </h5>
            <span> ₹{price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5> Service charges </h5>
            <span> ₹{100}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span> ₹{totalAmount.toFixed(2)}</span>
          </ListGroupItem>
        </ListGroup>

        {/* <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          {' '}
          Book Now
        </Button> */}

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          {' '}
          Pay Now ₹{totalAmount == 0 ? 0 : totalAmount.toFixed(2)}
        </Button>
      </div>
    </div>
  )
}

export default Booking
