import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from '../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import ThankYou from '../pages/ThankYou';
import About from '../pages/About';
import Contact from '../pages/Contact';
import PaymentCancelled from '../components/Payment-Cancelled/Payment';
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/tours' element={<Tours />}/>
        <Route path='/tours/:id' element={<TourDetails />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/thank-you' element={<ThankYou />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/tours/search' element={<SearchResultList />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/retry-booking' element={<PaymentCancelled/>}/>
    </Routes>
  );
};

export default Routers;