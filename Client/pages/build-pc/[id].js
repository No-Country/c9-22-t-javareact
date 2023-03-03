import Head from 'next/head'
import { motion } from 'framer-motion'
import { BuildPcComponent } from '@/components/public/buildPc'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useState } from 'react'

export default function BuildPcPage() {
  const URL_API = process.env.NEXT_PUBLIC_URL_API
  const router = useRouter()
  const { id } = router.query
  const [category, setcategory] = useState('Microprocesadores')

  const { isLoading, error, data } = useQuery(['byCategories', category], () =>
    axios
      .get(`${URL_API}/products/filter?category=${category}&page=0`)
      .then((res) => res.data)
      .catch((e) => console.log(e.response)),
  )
  console.log(data)
  return (
    <>
      <Head>
        <title>Spartan Hardware | Arma tu pc {id}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key="login"
        style={{ width: '100%', margin: '157px 0 0' }}
      >
        <p style={{ margin: '0 0 0 20px' }}>
          Home / Arma Tu Pc / <strong>{id}</strong>
        </p>
        <BuildPcComponent router={id} data={data} setcategory={setcategory} />
      </motion.div>
    </>
  )
}
