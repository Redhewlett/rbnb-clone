import styled from 'styled-components'
import chalet1 from '../../assets/photos/chalet/chalet1.webp'
import chalet2 from '../../assets/photos/chalet/chalet2.webp'
import chalet3 from '../../assets/photos/chalet/chalet3.webp'
import chalet4 from '../../assets/photos/chalet/chalet4.webp'

const CardContainer = styled.div`
  width: 15em;
  height: 15em;
  background-color: blueviolet;
  border-radius: 15px;
  overflow: hidden;
`

const CardCaroussel = styled.div`
  display: flex;
  transform: translateX(0em);
  transition: transform ease-in-out 250ms;
  img {
    width: 15em;
    aspect-ratio: 1;
    object-fit: cover;
  }
`

export default function Card() {
  return (
    <CardContainer>
      <CardCaroussel>
        <img src={chalet1} alt='chalet ' />
        <img src={chalet2} alt='chalet ' />
        <img src={chalet3} alt='chalet ' />
        <img src={chalet4} alt='chalet ' />
      </CardCaroussel>
    </CardContainer>
  )
}
