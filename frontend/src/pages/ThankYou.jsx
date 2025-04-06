import { useNavigate } from 'react-router-dom'
import '../styles/thank-you.css'

const ThankYou = () => {
  const navigate = useNavigate()

  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <div className="check-icon">✔️</div>
        <h1>🎉 Thank You!</h1>
        <p>Your booking and payment were successful.</p>
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
    </div>
  )
}

export default ThankYou
