import React from 'react'
import styled from 'styled-components'
import logo from './assets/airbnb.svg'

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.2em;
  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1.1vw;
    color: var(--main);
    letter-spacing: -0.05em;
  }
  img {
    width: 1.7vw;
    aspect-ratio: 1;
    filter: invert(56%) sepia(39%) saturate(5896%) hue-rotate(323deg) brightness(98%) contrast(109%);
  }
`

export default function Logo() {
  return (
    <LogoBox>
      <img src={logo} alt='airbnb_logo' />
      <h1>airbnb</h1>
    </LogoBox>
  )
}
