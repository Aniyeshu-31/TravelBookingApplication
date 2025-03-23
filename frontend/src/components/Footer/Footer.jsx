import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import './footer.css'

const quick__links = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' },
]

const quick__links2 = [ 
  { path: '/login', display: 'Login' },
  { path: '/register', display: 'Register' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Logo Section */}
          <Col lg="3">
            <div className="logo">
              {/* <img src={logo} alt="Logo" /> */}
              <p>
                Discover the world with BookEase. We offer personalized travel
                experiences that cater to your every need. Whether you're
                looking for adventure, relaxation, or culture, our expert team
                of travel planners will help you create unforgettable memories.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-twitter-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          {/* Discover Section */}
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Quick Links Section */}
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Contact Section */}
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links contact-info">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center">
                <div className="contact-icon">
                  <i className="ri-map-pin-line"></i>
                </div>
                <div className="contact-text">
                  <span>Address: Delhi , India</span>
                  <p></p>
                </div>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center">
                <div className="contact-icon">
                  <i className="ri-mail-line"></i>
                </div>
                <div className="contact-text">
                  <span>Email: aniyeshuverma31@gmail.com</span>
                  <p></p>
                </div>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center">
                <div className="contact-icon">
                  <i className="ri-phone-fill"></i>
                </div>
                <div className="contact-text">
                  <span>Phone: +91 6394615848</span>
                  <p></p>
                </div>
              </ListGroupItem>
            </ListGroup>
          </Col>

          {/* Copyright */}
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year}, designed and developed by Aniyeshu Verma. All
              rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
