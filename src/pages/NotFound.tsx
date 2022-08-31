import React from "react"
import styled from "styled-components"
import errorLight from "../assets/error-light.svg"
import errorDark from "../assets/error-dark.svg"

const NotFound = ({ theme }: any) => {
  return (
    <Wrapper>
      {theme === "light" ? <Img src={errorDark} /> : <Img src={errorLight} />}
    </Wrapper>
  )
}

export default NotFound

const Wrapper = styled.div`
  padding: 50px;
`

const Img = styled.img`
  display: block;
  max-width: 40%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`
