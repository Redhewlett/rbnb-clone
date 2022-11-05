import React from 'react'
import styled from 'styled-components'
//img
import chevron from './assets/chevron-left-solid.svg'

const Button = styled.button`
  width: 1.4vw;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid var(--lighterGrey);

  img {
    width: 0.5vw;
    transform: rotate(${(props) => props.direction + 'deg'});
    pointer-events: none;
  }
  :hover {
    transform: scale(1.1);
    box-shadow: 0px 8px 8px -6px rgba(0, 0, 0, 0.301);
    cursor: pointer;
    transition: all ease-in-out 200ms;
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
    <Button className={props.className} direction={direction} id={props.direction} onClick={props.onClick}>
      <img role='button' src={chevron} alt='chevron icon' />
    </Button>
  )
}
