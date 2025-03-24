import React from 'react'
import { useNavigate } from 'react-router-dom'
import { XCircle } from 'lucide-react' // Using Lucide React for icons
import './paymentcancel.css' // Importing the separate CSS file

const PaymentCancelled = () => {
  const navigate = useNavigate()

  return (
    <div className="payment-cancelled-container">
      <div className="payment-card">
        <XCircle className="payment-icon" />
        <h2 className="payment-title">Payment Cancelled</h2>
        <p className="payment-message">
          Your payment was not completed. If this was a mistake, you can try
          again.
        </p>
        <button className="retry-button" onClick={() => navigate('/tours')}>
          Retry Booking
        </button>
      </div>
    </div>
  )
}

export default PaymentCancelled
