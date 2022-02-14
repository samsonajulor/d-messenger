import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import './Error.css'

const Error = () => {
  return <Wrapper>
   <div>
    <h4>404</h4>
    <h3>Sorry, Page not found</h3>
    <Link to="/" className="error__btn"></Link>
   </div>
  </Wrapper>
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`
export default Error
