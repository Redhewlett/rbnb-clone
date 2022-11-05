import React from 'react'
import styled from 'styled-components'
//img
import chevron from './assets/chevron-left-solid.svg'

const Button = styled.button`
  width: 1.4vw;
  height: 1.4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid var(--lighterGrey);
  transition: all ease-in-out 300ms;
  img {
    width: 0.5vw;
    transform: rotate(${(props) => props.direction + 'deg'});
  }
  :hover {
    box-shadow: 0px 8px 8px -6px rgba(0, 0, 0, 0.301);
    cursor: pointer;
  }
`
const angles = {
  top: 90,
  bottom: -90,
  right: 180,
  left: 0
}

export default function ChevronButton(props) {
  const direction = angles?.[props.direction]
  return (
    <Button direction={direction} onClick={props.onClick}>
      <img role='button' id={props.direction} src={chevron} alt='chevron icon' />
    </Button>
  )
}
