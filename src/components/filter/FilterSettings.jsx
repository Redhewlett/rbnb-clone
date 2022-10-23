import React from 'react'
import styled from 'styled-components'
//img
import settings from '../../assets/icons/sliders-solid.svg'

const Settings = styled.button`
  width: max-content;
  background-color: white;
  display: flex;
  gap: 0.5vw;
  padding-block: 0.9vw;
  padding-inline: 0.7vw;
  font-size: 0.7em;
  border: 1px solid var(--lighterGrey);
  border-radius: 10px;
  img {
    width: 0.7vw;
  }
`

export default function FilterSettings(props) {
  return (
    <Settings onClick={props.onClick}>
      <img src={settings} alt='sliders icon' />
      Filtres
    </Settings>
  )
}
