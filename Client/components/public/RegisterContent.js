import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Input } from '../common/Input'
import { Button } from '../common/Button'
import { createUser } from '@/utils/services'
import { useContext } from 'react'
import { UserContext } from '@/context/UserContext'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Tiene que ser con formato de email')
    .required('El email es requerido'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener minimo 8 letras')
    .max(32)
    .required('La contraseña es requerida'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben ser iguales')
    .required('Campo requerido'),
  lastName: yup.string().required('Campo requerido'),
  firstName: yup.string().required('Campo requerido'),
})

export const RegisterContent = ({ setVisible, visible }) => {
  const { setUser } = useContext(UserContext)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => {
    const response = createUser(data)
    response
      .then((res) => {
        if (res?.status === 201) {
          setUser(res.data)
          localStorage.setItem('user', JSON.stringify(res.data))
          reset()
          setVisible({
            ...visible,
            modalActive: '',
            showModal: false,
          })
        }
      })
      .catch((e) => console.log('error: ', e))
  }
  return (
    <Container>
      <h2>Registro</h2>
      <p>
        Completa los siguientes <br /> campos para registrarte
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register('email')}
          registerInput="email"
          placeholder="Ingresar correo"
          label="Ingresar correo"
          errors={errors?.email?.message}
          margin="24px 0 21px"
        />
        <Input
          register={register('password')}
          registerInput="password"
          placeholder="Ingresar clave"
          label="Ingresar clave"
          errors={errors?.password?.message}
          margin="0px 0 21px"
          type="password"
        />
        <Input
          register={register('confirmPassword')}
          registerInput="confirmPassword"
          placeholder="Confirmar tu contraseña"
          label="Confirmar tu contraseña"
          errors={errors?.confirmPassword?.message}
          margin="0px 0 21px"
          type="password"
        />
        <Input
          register={register('lastName')}
          registerInput="lastName"
          placeholder="Ingresar apellido"
          label="Apellido"
          errors={errors?.lastName?.message}
          margin="0px 0 21px"
        />

        <Input
          register={register('firstName')}
          registerInput="firstName"
          placeholder="Ingresar nombre"
          label="Nombre"
          errors={errors?.firstName?.message}
          margin="0px 0 21px"
        />
        <Button
          type="submit"
          text="REGISTRARSE"
          width="200px"
          colorFocus="#25da2d"
          margin="7px 0 0"
        />
      </form>
    </Container>
  )
}

const Container = styled.div``
