import React, { useRef, useEffect, useContext } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { AuthContext } from '../../context/AuthContext'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'
import { useState } from 'react'

const nav__links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/tours',
    display: 'Tours',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
]

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const { user, dispatch } = useContext(AuthContext)
  const [display,setDisplay] = useState(true);
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }
 const toggleMenu = () => {
  setDisplay(false);
   if (menuRef.current) {
     const isOpen = menuRef.current.classList.contains('show__menu')
     if (isOpen) {
       menuRef.current.classList.remove('show__menu')
     } else {
       menuRef.current.classList.add('show__menu')
     }
   }
 }
  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  const handleNavLinkClick = ()=>{
    if (menuRef.current) {
      const isOpen = menuRef.current.classList.contains('show__menu')
      if (isOpen) {
        menuRef.current.classList.remove('show__menu')
      } else {
        menuRef.current.classList.add('show__menu')
      }
    }
    setDisplay(true);
  }
  useEffect(() => {
    stickyHeaderFunc()

    return window.removeEventListener('scroll', stickyHeaderFunc)
  })

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* ========= logo ===========*/}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/* ========= logo end   ===========*/}

            {/* ========= menu start   ===========*/}
            <div className="navigation" ref={menuRef}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                    onClick={handleNavLinkClick}
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'active__link' : ''
                      }>
                      {' '}
                      {item.display}{' '}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ========= menu end   ===========*/}

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
                      <Link to="/login" className="login">
                        {' '}
                        Login{' '}
                      </Link>
                    </Button>
                    <Button className="btn primary__btn">
                      {' '}
                      <Link to="/register"> Register </Link>
                    </Button>
                  </div>
                )}
              </div>
              {display && <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>}
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
