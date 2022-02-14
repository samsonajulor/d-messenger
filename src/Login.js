import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import loginImg from './images/login-img.svg'
// import {actionTypes} from './reducer'
// import {useStateValue} from './StateProvider'

import './Login.css'

const Login = () => {
  // const [{}, dispatch] = useStateValue()
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0()

  // dispatch({
  //   type: actionTypes.SET_USER,
  //   user
  // })

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
  /* min-height: 100vh; */
  display: grid;
  place-items: center;
  .login__container {
    /* width: 90vw; */
    /* max-width: 600px; */
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
    width: 200px;
    height: 200px
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`
export default Login
