import React from 'react'
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
  background-color: beige;
  padding-top: 1vw;
  position: relative;
`
const Inner = styled.div`
  width: 83%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.4em;
  background-color: aquamarine;
  overflow: hidden;
`

export default function Filter() {
  return (
    <Container>
      <Inner>
        {Options.map((option, index) => (
          <FilterButton key={index} img={option.img} alt={option.alt} title={option.title} />
        ))}
      </Inner>
      <ChevronButton direction='left' />
      <ChevronButton direction='right' />
      <FilterSettings />
    </Container>
  )
}
