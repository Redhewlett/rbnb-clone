import React from 'react'
import styled from 'styled-components'
//button
import FilterButton from './FilterButton'
//options
import Options from '../../assets/filter_icons/Options'

const Container = styled.section`
  width: 100vw;
  height: 5vw;
  background-color: beige;
  padding-inline: 4vw;
`
const Inner = styled.div`
  width: 83%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.4em;
  background-color: aquamarine;
  /* overflow: visible hidden; */
`

export default function Filter() {
  return (
    <Container>
      <Inner>
        {Options.map((option, index) => (
          <FilterButton key={index} img={option.img} alt={option.alt} title={option.title} />
        ))}
      </Inner>
    </Container>
  )
}
