import React, { useContext } from "react"
import styled from "styled-components"
import { CountriesContext } from "../contexts/CountriesContext"

export const CardLists = () => {
  const { data } = useContext(CountriesContext)
  console.log("datat", data)

  return (
    <GridContainer>
      {data?.map((item, idx) => (
        <Card key={idx}>
          <Flag src={item?.flags?.svg} alt={`${item?.name.common} flag`}/>
          <ContentWrapper>
            <CountryName>{item?.name?.common}</CountryName>
            <Title>
              Population:{" "}
              <StylesSpan>{item?.population.toLocaleString("en-US")}</StylesSpan>
            </Title>
            <Title>
              Region: <StylesSpan>{item?.region}</StylesSpan>
            </Title>
            <Title>
              Capital: <StylesSpan>{item?.capital}</StylesSpan>
            </Title>
          </ContentWrapper>
        </Card>
      ))}
    </GridContainer>
  )
}

export const Card = styled.div`
  width: 100%;
  height: 100%;
  max-height: 336px;
  max-width: 264px;
  box-shadow: 2px 8px 45px rgba(0, 0, 0, 0.15);
  /* box-shadow: 0px 0px 7px 2px rgba(163, 163, 163, 0.1); */
  border-radius: 5px;
  margin: 0 auto;
  &:hover {
    transform: translate3D(0, -2px, 0);
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 24px; 
  padding: 1.5rem 80px;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  margin: 0 auto;
  /* @media screen and (min-width: 520px) {
    margin: 1rem 2.5rem;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media screen and (min-width: 1440px) {
    max-width: 1530px;
    margin: 0 auto;
  } */
`

const Flag = styled.img`
  height: 160px;
  width: 100%;
  object-fit: cover;
  vertical-align: top;
  border-radius: 5px 5px 0 0;
`

const ContentWrapper = styled.div`
  padding: 0 24px 24px;
  border-radius: 5px 5px 0 0;
`

const StylesText = styled.p`
  margin: 8px 0;
  font-size: 14px;
  line-height: 16px;
`

const StylesSpan = styled.span`
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
`

const CountryName = styled.p`
  font-weight: 800;
  font-size: 18px;
`
const Title = styled(StylesText)`
  font-weight: 600;
`
