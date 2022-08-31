import React from "react"
import "./App.css"
import { lightTheme, darkTheme } from "./theme/Themes"
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "./theme/useDarkMode"
import { GlobalStyles } from "./theme/GlobalStyles"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import { Details } from "./pages/details/Details"
import Navbar from "./components/Navbar"
import NotFound from "./pages/NotFound"

function App() {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Navbar theme={theme} toggleTheme={themeToggler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<NotFound theme={theme} />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
