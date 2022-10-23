import styled from 'styled-components'
import React from 'react'
//icon
import globe from './assets/globe.svg'
import user from './assets/circle-user-solid.svg'
import burger from './assets/bars-solid.svg'

const LeftMenu = styled.div`
  width: max-content;
  height: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8vw;
  gap: 0.5em;
  p {
    padding: 0.7em 0.9em;
    border-radius: 20px;
  }
  p:hover {
    background-color: #76767614;
    cursor: pointer;
  }
  .globe {
    width: 0.9vw;
    aspect-ratio: 1;
    padding: 0.7em;
    border-radius: 50%;
  }
  .globe:hover {
    background-color: #76767614;
    cursor: pointer;
  }
`
const Pill = styled.div`
  width: max-content;
  height: 1.8vw;
  padding: 0.2em 0.6em;
  display: flex;
  gap: 1em;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #7676762f;
  font-size: 0.8vw;
  transition: all ease-in-out 300ms;
  :hover {
    box-shadow: 0px 6px 6px -6px rgba(0, 0, 0, 0.356);
    cursor: pointer;
  }
  img {
    width: 1.5vw;
    aspect-ratio: 1;
    filter: invert(25%) sepia(0%) saturate(5479%) hue-rotate(352deg) brightness(82%) contrast(76%);
  }
  img:first-of-type {
    width: 0.9vw;
  }
`

export default function Menu() {
  return (
    <LeftMenu>
      <p>Devenez hôte</p>
      <img src={globe} alt='globe_icon' className='globe' />
      <Pill>
        <img src={burger} alt='bars_icons' />
        <img src={user} alt='user_icon' />
      </Pill>
    </LeftMenu>
  )
}
