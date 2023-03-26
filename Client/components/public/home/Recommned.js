import styled from 'styled-components'
import RecommendCard from '../../common/Cardrecord'

export const Recommend = () => {
  return (
    <>
      <CardContainer>
        <div className="title">
          <h2>PC's Recomendadas</h2>
        </div>
        <div className="recommend">
          <RecommendCard title={"PC's BÁSICA"} link="/pc-recommend-sale" />
          <RecommendCard title={"PC's MEDIA"} link="/pc-recommend-sale" />
          <RecommendCard title={"PC's ALTA"} link="/pc-recommend-sale" />
        </div>
      </CardContainer>
    </>
  )
}

const CardContainer = styled.div`
  margin-top: 7em;
  height: auto;
  display: grid;
  gap: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 22rem;
  }

  .recommend {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12em;
  }
`
