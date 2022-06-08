import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import MovieDetails from './pages/MovieDetails'
import Addnew from './pages/Addnew'
import Update from './pages/Update'

function Pages() {
  return (
    <div>
      <BrowserRouter basename='/React_movie_app'>
        <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<MovieDetails />} />
          <Route path="/add" element={<Addnew />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Pages