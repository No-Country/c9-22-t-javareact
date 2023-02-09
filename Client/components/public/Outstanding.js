import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ProductCard } from '../common/ProductCard'
import { Anchor } from '../common/Anchor'

export const Outstanding = ({ props }) => {
  return (
    <Main>
      <div className="title">
        <h2>Productos Destacados</h2>
        <Anchor text="Ver más" to="#" />
      </div>
      <div className="outstanding">
        <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />
      </div>
    </Main>
  )
}

const Main = styled(motion.section)`
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  margin: 25rem auto 0;
  .title {
    display: flex;
    gap: 13px;
  }
  h2 {
    padding-left: 103px;
  }

  .outstanding {
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 3.5rem;
  }
`