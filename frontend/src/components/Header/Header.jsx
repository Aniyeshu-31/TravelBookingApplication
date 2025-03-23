import React, { useRef, useEffect, useContext, useState } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { AuthContext } from '../../context/AuthContext'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'

const nav__links = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' },
  { path: '/contact', display: 'Contact' },
]

const Header = () => {
  const headerRef = useRef(null)
  const navigate = useNavigate()
  const { user, dispatch } = useContext(AuthContext)
  const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
      setMenuOpen((prev) => !prev)
    }
  // Logout function
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
    setMenuOpen(false) // Close menu on logout
  }

  // Toggle mobile menu
 

  // Close menu when clicking a link
  const closeMenu = () => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    }
    window.addEventListener('scroll', stickyHeaderFunc)
    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  }, [])

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>

            {/* Navigation Menu */}
            <div className={`navigation ${menuOpen ? 'show__menu' : ''}`}>
              <ul className="menu d-flex flex-column flex-md-row align-items-md-center">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink onClick={closeMenu} to={item.path}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}

                {/* Show Login/Register Inside Mobile Menu */}
                {!user && (
                  <div className="mobile__only">
                    <li className="nav__item">
                      <NavLink onClick={closeMenu} to="/login">
                        Login
                      </NavLink>
                    </li>
                    <li className="nav__item">
                      <NavLink
                        className="nav__item"
                        onClick={closeMenu}
                        to="/register"
                      >
                        Register
                      </NavLink>
                    </li>
                  </div>
                )}
              </ul>
            </div>

            {/* Right-Side Buttons (Desktop Only) */}
            <div className="nav__right d-flex align-items-center gap-4">
              {user ? (
                <>
                  <h5 className="mb-0" style={{color:'white'}}>{user.username}</h5>
                  <Button className="btn btn-primary" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <div className="container__btn">
                  <Button className="btn secondary__btn">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button className="btn primary__btn">
                    <Link to="/register">Register</Link>
                  </Button>
                </div>
              )}

              {/* Mobile Menu Toggle */}
             {!user && <span className="mobile__menu" onClick={toggleMenu}>
                <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
              </span>}
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
