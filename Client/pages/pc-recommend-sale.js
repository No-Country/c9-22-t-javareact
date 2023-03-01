import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

import BannerImg from '@/public/images/BannerPCSale.png'
import { CatalogPcLow } from '@/components/public/PcRecommendSale/CatalogPcLow'
import Link from 'next/link'
import { getProducts } from '@/utils/services'
import { useQuery } from 'react-query'

export default function PcRecommend() {
  const { isLoading, error, data } = useQuery('products', getProducts())
  console.log(error)
  return (
    <>
      <Head>
        <title>Spartan Hardware | Pc Recomendadas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key="login"
        style={{ width: '100%' }}
      >
        <Image
          src={BannerImg}
          alt="banner"
          style={{ marginTop: '137px', width: '100%' }}
          quality={100}
        />
        <p style={{ margin: '10px 0 0 20px' }}>
          <Link passHref href="/">
            Home
          </Link>
          / <strong>PC´s Recomendadas</strong>
        </p>
        <CatalogPcLow />
      </motion.div>
    </>
  )
}
