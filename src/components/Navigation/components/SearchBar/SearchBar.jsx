import styled from 'styled-components'
import React from 'react'
//icon
import search from './assets/magnifying-glass-solid.svg'

const SearchBox = styled.div`
  width: max-content;
  height: 2vw;
  padding: 0.3em 1.5em;
  display: flex;
  gap: 1em;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #7676762f;
  font-size: 0.8vw;
  box-shadow: 0px 6px 6px -6px rgba(0, 0, 0, 0.336);
  transition: all ease-in-out 300ms;
  :hover {
    box-shadow: 0px 8px 8px -8px rgba(0, 0, 0, 0.356);
    cursor: pointer;
  }
  p {
    height: 65%;
    display: flex;
    align-items: center;
    border-right: 1px solid #7676762f;
    padding-right: 1em;
  }
  p:last-of-type {
    color: var(--lighterGrey);
    padding-right: 0em;
    border: none;
  }
  span {
    width: 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--main);
  }
  span img {
    width: 0.8vw;
    aspect-ratio: 1;
    filter: invert(100%) sepia(0%) saturate(7489%) hue-rotate(228deg) brightness(106%) contrast(103%);
  }
`

export default function SearchBar() {
  return (
    <SearchBox>
      <p>N'importe où</p>
      <p>Une semaine</p>
      <p>Ajouter des voyageurs</p>
      <span>
        <img src={search} alt='magnifying_glass_icon' />
      </span>
    </SearchBox>
  )
}
