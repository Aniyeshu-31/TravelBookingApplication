import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './footer.css'

const quickLinks1 = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' },
]

const quickLinks2 = [
  { path: '/login', display: 'Login' },
  { path: '/register', display: 'Register' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row className="footer__row">
          {/* Logo & About Section */}
          <Col lg="3" md="6">
            <div className="footer__about">
              {/* <img src={logo} alt="Logo" className="footer-logo" /> */}
              <p>
                Discover the world with BookEase. We offer personalized travel
                experiences that cater to your every need.
              </p>
              <div className="social__links">
                <Link to="#">
                  <i className="ri-youtube-line"></i>
                </Link>
                <Link to="#">
                  <i className="ri-github-fill"></i>
                </Link>
                <Link to="#">
                  <i className="ri-facebook-circle-line"></i>
                </Link>
                <Link to="#">
                  <i className="ri-twitter-line"></i>
                </Link>
              </div>
            </div>
          </Col>

          {/* Discover Section */}
          <Col lg="3" md="6">
            <h5 className="footer__title">Discover</h5>
            <ListGroup className="footer__links">
              {quickLinks1.map((item, index) => (
                <ListGroupItem key={index} className="border-4">
                  <Link to={item.path}>{<b>{item.display}</b>}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Quick Links Section */}
          <Col lg="3" md="6">
            <h5 className="footer__title">Quick Links</h5>
            <ListGroup className="footer__links">
              {quickLinks2.map((item, index) => (
                <ListGroupItem key={index} className="border-0">
                  <Link to={item.path}>{<b>{item.display}</b>}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Contact Section */}
          <Col lg="3" md="6">
            <h5 className="footer__title">Contact</h5>
            <ul className="footer__contact">
              <li>
                <i className="ri-map-pin-line"></i> Delhi, India
              </li>
              <li>
                <i className="ri-mail-line"></i> aniyeshuverma31@gmail.com
              </li>
              <li>
                <i className="ri-phone-fill"></i> +91 6394615848
              </li>
            </ul>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row>
          <Col lg="12" className="text-center pt-4">
            <hr className="footer_divider" />
            <p className="copyright">
              &copy; {year}, Designed & Developed by <b>Aniyeshu Verma</b>. All
              rights reserved.
            </p>
            <p className="copyright_mobile" style={{ textAlign: 'center' }}>
              &copy; {year}, Designed & Developed <br />
              <span>
                by <b>Aniyeshu Verma</b>.
              </span>
              <br />
              All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
