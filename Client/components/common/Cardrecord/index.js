import Tilt from 'react-parallax-tilt'
import img1 from '@/public/images/pc.png'
import Image from 'next/image' 
import { Button } from '../Button'
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
} from './CardStyles'

const CardRe = ({ title }) => {
  return (
    <Tilt>
      <CardWrapper>
        <CardImage>
	  <Image src={img1} alt="PC" width="123" height="165" />
        </CardImage>
        <CardTextWrapper>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            Conozca todas nuestras PC's, <br />
            para trabajo básico y de bajo <br />
            desempeño
          </CardTextBody>
          <div>
            <p>
              <br />
            </p>
          </div>
          <div>
            <p>
              <br />
            </p>
          </div>
          <div>
            <Button text="Cotizar" />
          </div>
        </CardTextWrapper>
      </CardWrapper>
    </Tilt>
  )
}

export default CardRe
