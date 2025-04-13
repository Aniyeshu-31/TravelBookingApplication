import express from 'express';
import { confirmBooking, createBookingOrder, getAllBookingDetails, getBookingDetails } from '../controllers/bookingController.js';
import { verifyUser,verifyAdmin } from '../Utils/verifyToken.js';
const router= express.Router();

router.post('/',verifyUser,createBookingOrder)
router.get('/:id',verifyUser,getBookingDetails)
router.get('/',verifyAdmin,getAllBookingDetails)
router.post('/verify',verifyUser,confirmBooking)
export default router;