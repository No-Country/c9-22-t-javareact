import Head from 'next/head'
import { motion } from 'framer-motion'

export default function PhonesPage() {
  return (
    <>
      <Head>
        <title>Spartan Hardware | Celulares</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key="phone"
        style={{ width: '100%' }}
      >
        Estoy en categoria phones
      </motion.div>
    </>
  )
}
