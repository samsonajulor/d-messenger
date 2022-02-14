import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import loginImg from './images/login-img.svg'

import './Login.css'
const Login = () => {
  return (
    <Wrapper>
      <div className="login__container">
 <img src={loginImg} alt="d-messenger" />
 <h1>D-Messenger</h1>
 <button className="login__btn">login</button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`
export default Login
