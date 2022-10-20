import styled from 'styled-components'
import React from 'react'
//icon
import globe from '../../../assets/icons/globe.svg'
import user from '../../../assets/icons/circle-user-solid.svg'
import burger from '../../../assets/icons/bars-solid.svg'

const LeftMenu = styled.div`
  width: max-content;
  height: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8vw;
  gap: 0.7em;
  .globe {
    width: 0.9vw;
    margin-left: 0.4em;
    aspect-ratio: 1;
  }
`
const Pill = styled.div`
  width: max-content;
  height: 1.8vw;
  padding: 0.3em 0.6em;
  display: flex;
  gap: 1em;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #7676762f;
  font-size: 0.8vw;
  transition: all ease-in-out 300ms;
  :hover {
    box-shadow: 0px 7px 7px -6px rgba(0, 0, 0, 0.356);
  }
  img {
    width: 1.8vw;
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
        <img src={burger} alt='globe_icon' />
        <img src={user} alt='globe_icon' />
      </Pill>
    </LeftMenu>
  )
}
