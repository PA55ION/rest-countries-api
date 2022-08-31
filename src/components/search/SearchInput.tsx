import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import styled from "styled-components"

const SearchInput = () => {
  return (
    <form>
      <InputWrapper>
        <Icon />
        <Input type="text" placeholder="Search for a country..." />
      </InputWrapper>
    </form>
  )
}

export default SearchInput

const InputWrapper = styled.div`
  width: 100%;
  margin: 45px 80px;
  display: flex;
  position: relative;
  flex-direction: column;
  @media (min-width: 638px) {
    width: 350px;
    height: 54px;
  }
  @media (min-width: 1024px) {
    width: 500px;
    /* margin-left: 3.9rem; */
  }
`

const Input = styled.input`
  max-width: 100%;
  padding: 14px 50px;
  text-align: left;
  height: 50px;
  border-radius: 6px;
  border: none;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  border: ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  &:focus {
    border-color: ${({ theme }) => theme.blue};
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.text};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.text};
  }
`

const Icon = styled(AiOutlineSearch)`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  position: absolute;
  left: 0;
  top: 10px;
  padding: 8px 25px;
`
