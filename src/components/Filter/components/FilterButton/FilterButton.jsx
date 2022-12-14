import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .custom-radio input {
    display: none;
  }
  .radio-btn {
    width: 100%;
    border-bottom: 2px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    color: #767676;
    transition: all ease-in-out 200ms;
  }
  .radio-btn h2 {
    width: max-content;
    font-size: 0.7em;
    font-weight: 400;
  }
  .radio-btn:hover {
    border-bottom: 2px solid #767676;
  }
  .radio-btn img {
    width: 1.3vw;
    aspect-ratio: 1;
    filter: invert(51%) sepia(9%) saturate(15%) hue-rotate(333deg) brightness(88%) contrast(86%);
  }
  .radio-btn:hover,
  img {
    filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(66deg) brightness(0%) contrast(107%);
  }
  .custom-radio input:checked + .radio-btn img {
    filter: invert(0%) sepia(75%) saturate(30%) hue-rotate(71deg) brightness(109%) contrast(106%);
  }
  .custom-radio input:checked + .radio-btn {
    border-bottom: 2px solid black;
    color: black;
  }
`

export default function FilterButton(props) {
  return (
    <Wrapper>
      <label className='custom-radio'>
        <input type='radio' name='radio' />
        <span className='radio-btn'>
          <img src={props.img} alt={props.altTxt} />
          <h2>{props.title}</h2>
        </span>
      </label>
    </Wrapper>
  )
}
