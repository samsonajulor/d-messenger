import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import loginImg from './images/login-img.svg'

import './Login.css'

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0()


  return (
    <Wrapper>
      <div className='login__container'>
        <img src={loginImg} alt='d-messenger' />
        <h1>D-Messenger</h1>
        <button onClick={() => loginWithRedirect()} className='login__btn'>
          login/signup
        </button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  place-items: center;
  .login__container {
    text-align: center;
    margin-top: 90px;
  }
  img {
    margin-bottom: 2rem;
    width: 50vw;
    height: 50vh;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`
export default Login
