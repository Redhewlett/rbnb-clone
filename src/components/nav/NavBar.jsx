import React from 'react'
import styled from 'styled-components'
//components
import Logo from './logo/Logo'
import SearchBar from './searchBar/SearchBar'
import Menu from './menu/Menu'

const NavBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4vw 4vw;
  border-bottom: 1px solid #7676762f;
`

export default function NavBar(props) {
  return (
    <NavBox>
      <Logo />
      <SearchBar />
      <Menu />
    </NavBox>
  )
}
