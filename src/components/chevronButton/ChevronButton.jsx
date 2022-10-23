import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

//img
import chevron from '../../assets/icons/chevron-left-solid.svg'

const Button = styled.button`
  width: 1.5vw;
  height: 1.5vw;
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
    box-shadow: 0px 7px 7px -6px rgba(0, 0, 0, 0.301);
    cursor: pointer;
  }
`

export default function ChevronButton(props) {
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    switch (props.direction) {
      case 'right':
        setDirection(180)
        break
      case 'top':
        setDirection(90)
        break
      case 'bottom':
        setDirection(-90)
        break
      default:
        return setDirection(0)
    }

    //cleanup
    return () => {
      setDirection(0)
    }
  }, [props.direction])

  return (
    <Button className='chevron' direction={direction} onClick={props.onClick}>
      <img src={chevron} alt='chevron icon' />
    </Button>
  )
}
