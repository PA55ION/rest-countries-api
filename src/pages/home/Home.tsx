import React, { useContext } from "react"
import { CardLists } from "../../components/CardLists"
import { CountriesContext } from "../../contexts/CountriesContext"
import { Loader } from "../../components/loader/Loader"
import SearchInput from "../../components/search/SearchInput"

const Home = () => {
  const { data, isLoading, error } = useContext(CountriesContext)

  return (
    <div>
      {error && <div>Oh no something went wrong. Please try again.</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchInput />
          <CardLists />
        </>
      )}
    </div>
  )
}

export default Home
