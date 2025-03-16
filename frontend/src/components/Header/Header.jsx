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
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const { user, dispatch } = useContext(AuthContext)
  const [menuOpen, setMenuOpen] = useState(false)

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    if (menuRef.current) {
      menuRef.current.classList.toggle('show__menu')
    }
  }

  const handleNavLinkClick = () => {
    setMenuOpen(false)
    if (menuRef.current) {
      menuRef.current.classList.remove('show__menu')
    }
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
            <div className="navigation" ref={menuRef}>
              <ul
                className={`${
                  menuOpen
                    ? 'menu d-flex align-items-center gap-1'
                    : 'menu d-flex align-items-center gap-5'
                }`}
              >
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      onClick={handleNavLinkClick}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? 'active__link' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}

                {/* Login & Register in Mobile Menu */}
                {!user && (
                  <>
                    <li className="nav__item mobile__only">
                      <NavLink onClick={handleNavLinkClick} to="/login">
                        Login
                      </NavLink>
                    </li>
                    <li className="nav__item mobile__only">
                      <NavLink onClick={handleNavLinkClick} to="/register">
                        Register
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Right-side Buttons */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
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
              </div>

              {/* Mobile Menu Toggle */}
              {!menuOpen && (
                <span className="mobile__menu" onClick={toggleMenu}>
                  <i className="ri-menu-line"></i>
                </span>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
