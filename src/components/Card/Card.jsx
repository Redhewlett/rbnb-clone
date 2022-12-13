import React, { useState } from 'react'
import styled from 'styled-components'
// components
import ChevronButton from '../ChevronButton/ChevronButton'
// img
import chalet1 from '../../assets/photos/chalet/chalet1.webp'
import chalet2 from '../../assets/photos/chalet/chalet2.webp'
import chalet3 from '../../assets/photos/chalet/chalet3.webp'
import chalet4 from '../../assets/photos/chalet/chalet4.webp'

const CardContainer = styled.div`
  width: 15em;
  height: 25em;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  .filter-directionButton {
    display: none;
    position: absolute;
    top: 30%;
    z-index: 2;
  }
  &:hover .filter-directionButton:nth-of-type(1) {
    display: ${(props) => (props.scroll === 0 ? 'none' : 'block')};
  }
  &:hover .filter-directionButton:nth-of-type(2) {
    display: ${(props) => (props.scroll === -45 ? 'none' : 'block')};
  }
  .filter-directionButton:nth-of-type(1) {
    left: 4%;
  }
  .filter-directionButton:nth-of-type(2) {
    right: 4%;
  }
`

const CardCaroussel = styled.div`
  display: flex;
  /* max -60 */
  transform: translateX(${(props) => props.scroll + 'em'});
  transition: transform ease-in-out 250ms;
  img {
    width: 15em;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 15px;
  }
`
const CardTxt = styled.div`
  background-color: yellowgreen;
`

export default function Card(props) {
  const [currentScroll, setCurrentScroll] = useState(0)

  function handleClick(e) {
    const id = e.target.id

    if (currentScroll === 0 && id === 'left') return
    if (currentScroll === -60 && id === 'right') return

    const amount = id === 'right' ? -15 : +15
    setCurrentScroll((prev) => prev + amount)
  }

  return (
    <CardContainer scroll={currentScroll}>
      <CardCaroussel scroll={currentScroll}>
        <img src={chalet1} alt='chalet ' />
        <img src={chalet2} alt='chalet ' />
        <img src={chalet3} alt='chalet ' />
        <img src={chalet4} alt='chalet ' />
      </CardCaroussel>
      <ChevronButton className='filter-directionButton' direction='left' onClick={handleClick} />
      <ChevronButton className='filter-directionButton' direction='right' onClick={handleClick} />
      <CardTxt>
        <p>montreyukke-sur-epte, France</p>
      </CardTxt>
    </CardContainer>
  )
}
