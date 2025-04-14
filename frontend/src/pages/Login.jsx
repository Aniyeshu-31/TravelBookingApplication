import React, { useState, useContext, useEffect } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()
  const { dispatch } = useContext(AuthContext)

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  // Auto-login if token exists
  useEffect(() => {
    window.scroll(0, 0)
    const checkLogin = async () => {
      try {
        const res = await fetch(`${BASE_URL}/auth/profile`, {
          method: 'GET',
          credentials: 'include',
        })
        const result = await res.json()
        if (res.ok) {
          dispatch({ type: 'LOGIN_SUCCESS', payload: result.data })
          navigate('/')
        }
      } catch (err) {
        console.log('No existing login found')
      }
    }
    checkLogin()
  }, [dispatch, navigate])

  const handleClick = async (e) => {
    e.preventDefault()
    dispatch({ type: 'LOGIN_START' })

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      const result = await res.json()
      if (!res.ok) {
        alert(result.message)
        return
      }

      dispatch({ type: 'LOGIN_SUCCESS', payload: result.data })
      navigate('/')
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message })
    }
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login
