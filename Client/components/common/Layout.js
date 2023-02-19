import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import CardRecommend from './Cardrecord'
import img1 from '../../public/images/pc.png';

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <Navbar />
      <AnimatePresence mode="wait">{children}</AnimatePresence>
      <CardContainer>
        <CardRecommend title={"PC's ALATA"} imgUrl={img1}/>
        <Separator />
      </CardContainer>
      <Footer />
    </PageContainer>
  )
}

export default Layout

const PageContainer = styled.div`
  background-color: var(--mainBg);
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CardContainer = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;
