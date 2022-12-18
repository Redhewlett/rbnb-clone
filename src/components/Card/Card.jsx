import React, { useState } from 'react'
import styled from 'styled-components'
// components
import ChevronButton from '../ChevronButton/ChevronButton'
// img
import star from './assets/star.svg'
import chalet1 from '../../assets/photos/chalet/chalet1.webp'
import chalet2 from '../../assets/photos/chalet/chalet2.webp'
import chalet3 from '../../assets/photos/chalet/chalet3.webp'
import chalet4 from '../../assets/photos/chalet/chalet4.webp'

const Container = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
`
const CardCarousselContainer = styled.div`
  width: 16em;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  .directionButton {
    display: none;
    position: absolute;
    top: 50%;
    z-index: 2;
  }
  &:hover .directionButton:nth-of-type(1) {
    display: ${(props) => (props.scroll === 0 ? 'none' : 'block')};
  }
  &:hover .directionButton:nth-of-type(2) {
    display: ${(props) => (props.scroll === -48 ? 'none' : 'block')};
  }
  .directionButton:nth-of-type(1) {
    left: 4%;
  }
  .directionButton:nth-of-type(2) {
    right: 4%;
  }
`

const CardCaroussel = styled.div`
  position: relative;
  display: flex;
  /* max 16*numberof pictures*/
  transform: translateX(${(props) => props.scroll + 'em'});
  transition: transform ease-in-out 250ms;
  img {
    width: 16em;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 15px;
  }
`
const CardTxt = styled.div`
  background-color: yellowgreen;
  display: flex;
  .cardTxt__description {
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
  }
  .cardTxt__description__main {
    font-weight: 500;
  }
  .cardTxt__description p {
    margin: 0;
    background-color: antiquewhite;
  }
  .cardTxt__rating {
    width: 20%;
    height: max-content;
    display: flex;
    gap: 0.5em;
    background-color: blanchedalmond;
  }
  .cardTxt__rating p {
    margin: 0;
  }
  .cardTxt__rating img {
    width: 1em;
    height: 1em;
  }
`

export default function Card(props) {
  const [currentScroll, setCurrentScroll] = useState(0)

  function handleClick(e) {
    const id = e.target.id

    if (currentScroll === 0 && id === 'left') return
    if (currentScroll === -64 && id === 'right') return

    const amount = id === 'right' ? -16 : +16
    setCurrentScroll((prev) => prev + amount)
  }

  return (
    <Container>
      <CardCarousselContainer scroll={currentScroll}>
        <CardCaroussel scroll={currentScroll}>
          <img src={chalet1} alt='chalet' />
          <img src={chalet2} alt='chalet' />
          <img src={chalet3} alt='chalet' />
          <img src={chalet4} alt='chalet' />
        </CardCaroussel>
        <ChevronButton className='directionButton' direction='left' onClick={handleClick} />
        <ChevronButton className='directionButton' direction='right' onClick={handleClick} />
      </CardCarousselContainer>
      <CardTxt>
        <div className='cardTxt__description'>
          <p className='cardTxt__description__main'>Manigod, France</p>
          <p>manigod, France</p>
          <p>montreyukke-sur-epte, France</p>
          <p>montreyukke-sur-epte, France</p>
        </div>
        <span className='cardTxt__rating'>
          <img src={star} alt='black star' />
          <p>4,8</p>
        </span>
      </CardTxt>
    </Container>
  )
}
