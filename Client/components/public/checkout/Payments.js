import { UserContext } from '@/context/UserContext'
import Image from 'next/image'
import { useContext } from 'react'
import styled from 'styled-components'

export const Payments = ({ image, title, action, disabled, id = 0 }) => {
  const { user } = useContext(UserContext)
  return (
    <Container disabled={disabled} selected={id === user?.payment?.id}>
      <div onClick={action} className="image-container">
        <Image src={image} alt="payment_type" />
      </div>
      <h3>{title}</h3>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  cursor: ${(props) => (props.disabled ? 'inherit' : 'pointer')};
  opacity: ${(props) => props.disabled && '0.35'};
  .image-container {
    background: ${(props) =>
      props.selected
        ? 'rgba(165, 124, 255, 0.6)'
        : 'rgba(217, 217, 217, 0.55)'};
    border: 1px solid #cdcdcd;
    border-radius: 8px;
    transition: all ease-in-out 0.3s;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    text-align: center;
    color: #848484;
    text-transform: uppercase;
    margin: 5px 0 0 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    transition: all ease-in-out 0.3s;
  }

  &:hover {
    .image-container {
      background: rgba(165, 124, 255, 0.6);
      border: 1px solid #cdcdcd;
    }
    h3 {
      color: #484848;
    }
  }
`
