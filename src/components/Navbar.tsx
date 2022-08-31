import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { TbMoon } from "react-icons/tb"
import { RiMoonFill } from "react-icons/ri"
import { useDarkMode } from "../theme/useDarkMode"

interface ThemeProps {
  theme?: any
  toggleTheme: any
}

const Navbar = ({ theme, toggleTheme }: ThemeProps) => {
  return (
    <Nav>
      <Wrapper>
        <Logo to="/">Where in the world?</Logo>
        <Button onClick={toggleTheme}>
          {theme === "light" ? <TbMoon /> : <RiMoonFill />}
          <DarkModeText>Dark Mode</DarkModeText>
        </Button>
      </Wrapper>
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
  height: 80px;
  width: 100%;
  box-shadow: 0px 2px 10px -5px rgba(21, 6, 5, 1);
  /* box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06); */
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  padding: 0 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    padding: 0 80px;
  }
`

const Button = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.text};
  &:hover {
    cursor: pointer;
  }
`

const Logo = styled(Link)`
  font-weight: 800;
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`

const DarkModeText = styled.span`
  position: relative;
  top: -3px;
  margin-left: 6px;
  font-size: 14px;
`
