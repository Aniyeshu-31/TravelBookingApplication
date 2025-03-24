import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BASE_URL } from '../utils/config'

const ThankYou = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const verifyPayment = async () => {
      const urlParams = new URLSearchParams(location.search)
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

        const data = await res.json();

        if (data.success) {
          console.log('✅ Payment Verified, Booking Confirmed!')
        } else {
          console.error('❌ Payment Verification Failed:', data.message)
        }
      } catch (error) {
        console.error('❌ Error verifying payment:', error)
      }
    }

    verifyPayment()
  }, [location.search])

  return (
    <div className="thank-you">
      <h2>🎉 Thank You for Your Booking!</h2>
      <p>Your payment has been processed successfully.</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  )
}

export default ThankYou
