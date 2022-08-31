import axios from "axios"
import React, { useState, useEffect, useRef } from "react"

interface Children {
  children: React.ReactNode
}

interface DataProps {
  flags: {
    png: string
    svg: string
  }
  name: {
    common: string
  }
  population: number
  region: string
  capital: string
}

interface AppContext {
  country: []
  setCountry: React.Dispatch<React.SetStateAction<DataProps[]>>
  isLoading?: boolean
  error?: boolean
  data: DataProps[]
  setData: React.Dispatch<React.SetStateAction<DataProps[]>>
  countries?: any
}

const CountriesContext = React.createContext<Partial<AppContext>>({})

const ContextProvider = ({ children }: Children) => {
  const [country, setCountry] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [region, setRegion] = useState()
  const [error, setError] = useState(false)
  const [data, setData] = useState<Array<DataProps> | undefined>([]) as any
  const countries = useRef(null) as React.MutableRefObject<
    undefined | null | string | []
  >

  const END_POINTS = {
    ALL_COUNTRIES_API: "https://restcountries.com/v3.1/all",
    SEARCH_BY_NAME_API: "https://restcountries.eu/rest/v3.1/name/",
    SEARCH_BY_REGION_API: "https://restcountries.com/v3.1/region/",
  }

  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      setIsLoading(true)
      try {
        const fetchCountries = await axios.get(
          `${END_POINTS.ALL_COUNTRIES_API}`
        )
        countries.current = fetchCountries.data
        setData(countries.current)
        if (country) {
          const fetchCountryByName = await axios.get(
            `${END_POINTS.SEARCH_BY_NAME_API}`
          )
          countries.current = fetchCountryByName.data
          setData(countries.current)
        }
      } catch (error) {
        setError(true)
      }
      setIsLoading(false)
    }
    fetchData()
    // fetch(`${END_POINTS.ALL_COUNTRIES_API}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCountries(data)
    //     setIsLoading(true)
    //   })
  }, [country])

  // useEffect(() => {
  //   const fetchRegion = async () => {
  //     if (region === "") {
  //       countries.current = null
  //     } else {
  //       const result = await axios.get(`${END_POINTS.SEARCH_BY_REGION_API}`)
  //       countries.current = result.data
  //       setData(countries.current)
  //     }
  //   }
  //   fetchRegion()
  // }, [region])

  return (
    <CountriesContext.Provider value={{ countries, isLoading, error, data }}>
      {children}
    </CountriesContext.Provider>
  )
}

export { CountriesContext, ContextProvider }
