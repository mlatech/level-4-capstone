import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Search from "./Search"
import ZodiacFacts from "./ZodiacFacts"

export default function App(){
  return(
    <div>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/zodiacfacts" element={<ZodiacFacts />} />

        </Routes>

      </Router>
    </div>
  )
}

