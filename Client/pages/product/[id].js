import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Product() {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Head>
        <title>Spartan Hardware | Inicio de sesion</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Estoy en el producto {id}</div>
    </>
  )
}
