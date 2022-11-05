import React, { useState } from 'react'
import styled from 'styled-components'
//components
import FilterButton from './components/FilterButton/FilterButton'
import FilterSettings from './components/FilterSettings/FilterSettings'
import ChevronButton from '../ChevronButton/ChevronButton'
//options
import Options from './components/FilterButton/assets/Options'

const Container = styled.section`
  width: 100vw;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4vw;
  padding-top: 1.5vw;
  position: relative;
  .filter-directionButton {
    position: absolute;
    top: 50%;
    z-index: 2;
  }
  .filter-directionButton:nth-of-type(1) {
    opacity: ${(props) => (props.scroll === 0 ? 0 : 1)};
    left: 4%;
    transition: opacity ease-in-out 400ms;
  }
  .filter-directionButton:nth-of-type(2) {
    opacity: ${(props) => (props.scroll === -182 ? 0 : 1)};
    right: 11%;
    transition: opacity ease-in-out 400ms;
  }
`
const Caroussel = styled.div`
  width: 85%;
  overflow: hidden;
  position: relative;
  ::after,
  ::before {
    content: '';
    width: 4em;
    height: 4em;
    position: absolute;
    top: 0%;
    z-index: 1;
    pointer-events: none;
  }
  ::after {
    opacity: ${(props) => (props.scroll === -182 ? 0 : 1)};
    background: rgb(255, 255, 255);
    background: linear-gradient(270deg, rgba(255, 255, 255, 1) 48%, rgba(255, 255, 255, 0) 100%);
    right: 0%;
    transition: opacity ease-in-out 400ms;
  }
  ::before {
    opacity: ${(props) => (props.scroll === 0 ? 0 : 1)};
    background: rgb(255, 255, 255);
    background: linear-gradient(99deg, rgba(255, 255, 255, 1) 48%, rgba(255, 255, 255, 0) 100%);
    left: 0%;
    transition: opacity ease-in-out 400ms;
  }
`
const Inner = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.4em;
  padding-right: 1em;
  /* max-right 182em (4 times 45,5) */
  transform: translateX(${(props) => props.scroll + 'em'});
  transition: transform ease-in-out 450ms;
`

export default function Filter(props) {
  const [currentScroll, setCurrentScroll] = useState(0)

  function handleClick(e) {
    const id = e.target.id

    if (currentScroll === 0 && id === 'left') return
    if (currentScroll === -182 && id === 'right') return

    const amount = id === 'right' ? -45.5 : +45.5
    setCurrentScroll((prev) => prev + amount)
  }

  return (
    <Container scroll={currentScroll}>
      <Caroussel scroll={currentScroll}>
        <Inner scroll={currentScroll}>
          {Options.map((option, index) => (
            <FilterButton key={index} img={option.img} alt={option.alt} title={option.title} />
          ))}
        </Inner>
      </Caroussel>
      <ChevronButton className='filter-directionButton' direction='left' onClick={handleClick} />
      <ChevronButton className='filter-directionButton' direction='right' onClick={handleClick} />

      <FilterSettings />
    </Container>
  )
}
