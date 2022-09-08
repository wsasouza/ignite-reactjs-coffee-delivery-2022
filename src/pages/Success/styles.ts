import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin: 7rem auto 2rem auto;
  max-width: 70rem;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 6rem;

  img {
    display: block;
    margin-top: 11.25rem;
  }

  @media (max-width: 1135px) {
    gap: 1rem;
  }

  @media (max-width: 990px) {
    grid-template-columns: 1fr;

    img {
      display: block;
      margin-top: 2rem;
    }
  }

  @media (max-width: 525px) {
    img {
      display: none;
    }
  }
`

export const DataDelivery = styled.div`
  h1 {
    margin-top: 5rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 1.3;
  }

  & > p {
    font-size: 1.25rem;
  }

  @media (max-width: 525px) {
    h1 {
      font-size: 1.5rem;
    }

    & > p {
      font-size: 1rem;
    }
  }
`

export const DataRequest = styled.div`
  position: relative;
  margin-top: 2.75rem;
  min-width: 32.875rem;
  padding: 2.5rem;
  border: double 1px transparent;
  background-image: linear-gradient(#fafafa, #fafafa),
    radial-gradient(circle at top left, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  @media (max-width: 1135px) {
    min-width: 28rem;
  }

  @media (max-width: 525px) {
    margin-top: 1.5rem;
    overflow-x: auto;
    font-size: 0.875rem;
    padding: 2.5rem 0.75rem;
  }
`
