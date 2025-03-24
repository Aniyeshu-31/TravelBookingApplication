import React, { useEffect } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/config'
import '../styles/thank-you.css'

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      const urlParams = new URLSearchParams(window.location.search)
      const sessionId = urlParams.get('session_id')

      if (!sessionId) {
        console.error('No session ID found')
        return
      }

      try {
        const res = await fetch(`${BASE_URL}/booking/verify-payment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
        })

        const data = await res.json()

        if (data.success) {
          console.log('✅ Payment Verified, Booking Confirmed!')
        } else {
          console.error('❌ Payment Verification Failed:', data.message)
        }
      } catch (error) {
        console.error('❌ Error verifying payment:', error)
      }
    }

   verifyPayment();
  }, [])

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you">
              <span>
                <i className="ri-checkbox-circle-line"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Thank You</h1>
              <h3 className="mb-4">Your tour is booked.</h3>

              <Button className="btn primary__btn w-25">
                <Link to="/home"> Back to Home </Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ThankYou
