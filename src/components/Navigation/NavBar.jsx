import React from 'react'
import styled from 'styled-components'
//components
import Logo from './components/Logo/Logo'
import SearchBar from './components/SearchBar/SearchBar'
import Menu from './components/Menu/Menu'

const NavBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4vw 4vw;
  border-bottom: 1px solid #7676762f;
`
export default function NavBar() {
  return (
    <NavBox>
      <Logo />
      <SearchBar />
      <Menu />
    </NavBox>
  )
}
