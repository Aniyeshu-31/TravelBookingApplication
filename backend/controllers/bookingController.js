import Booking from '../models/booking.js' // Ensure this path is correct
import dotenv from 'dotenv'
import crypto, { sign } from 'crypto'
import Razorpay from 'razorpay'
import { nanoid } from 'nanoid'
dotenv.config()
export const createBookingOrder = async (req, res) => {
  console.log(req.cookies.accessToken);
  try {
    const { totalAmount } = req.body
    console.log(totalAmount)
    if (!totalAmount || isNaN(totalAmount)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid totalAmount provided!',
      })
    }

    const keyId = process.env.RZP_PAY_ID
    const keySecret = process.env.RZP_KEY_SECRET

    if (!keyId || !keySecret) {
      console.error(
        '❌ Razorpay credentials are missing in environment variables'
      )
      return res.status(500).json({
        success: false,
        message: 'Server configuration error: Razorpay credentials not set',
      })
    }
    const instance = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    })

    const options = {
      amount: Math.round(totalAmount * 100),
      currency: 'INR',
      receipt: `rcpt_${nanoid(12)}`,
    }

    const order = await instance.orders.create(options)

    if (!order) {
      return res.status(500).json({
        success: false,
        message: 'Failed to create order',
      })
    }
    console.log(order)
    return res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: order,
    })
  } catch (err) {
    console.error('🔥 createBookingOrder ERROR:', err)

    return res.status(500).json({
      success: false,
      message: 'Order creation failed',
      error: err.message || err,
    })
  }
}

export const confirmBooking = async (req, res) => {
  try {
    const { orderId, paymentId, signature, bookingDetails} = req.body

    if (!paymentId || !signature) {
      return res
        .status(400)
        .json({ success: false, message: 'Missing payment details' })
    }
    console.log(bookingDetails.AmountToPay);
    // 🔐 Verify Signature
    const hmac = crypto.createHmac('sha256', process.env.RZP_KEY_SECRET)
    hmac.update(`${orderId}|${paymentId}`)
    const generatedSignature = hmac.digest('hex')

    if (generatedSignature !== signature) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid signature' })
    }
  console.log('📦 bookingDetails:', bookingDetails)
    const booking = new Booking({
      userId: bookingDetails.userId,
      userEmail: bookingDetails.userEmail,
      tourName: bookingDetails.tourName, 
      fullName: bookingDetails.fullName,
      phone: bookingDetails.phone,
      guestSize: bookingDetails.guestSize,
      totalAmount: bookingDetails.AmountToPay,
      startAt: bookingDetails.startAt || new Date(),
      endAt:bookingDetails.endAt || new Date(),
      razorpayPaymentId: paymentId,
      orderId: orderId,
      status: 'confirmed',
    })

    await booking.save()

    res
      .status(200)
      .json({ success: true, message: 'Booking confirmed', data: booking })
  } catch (err) {
    console.error('❌ Booking Confirmation Error:', err.message)
    res
      .status(500)
      .json({ success: false, message: 'Booking confirmation failed' })
  }
}
export const getBookingDetails = async (req, res) => {
  const id = req.params.id
  try {
    const book = await Booking.findById(id)
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: 'Booking not Found!' })
    }
    res.status(200).json({
      success: true,
      message: 'Booking Fetched Successfully!!',
      data: book,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error!',
    })
  }
}
export const getUserBooking = async (req,res)=>{
  try {
    const bookings = await Booking.find({ userId: req.user.id }).sort({
      startDate: 1,
    })
    res.json(bookings)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}
export const getAllBookingDetails = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).sort({startDate:1})
    return res.status(200).json({
      success: true,
      message: 'All Bookings Fetched Successfully!!',
      data: bookings,
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error!',
    })
  }
}
