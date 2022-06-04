import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'
import MovieDetails from './MovieDetails'
import Addnew from './Addnew'
import Update from './Update'

function Pages() {
  return (
    <div>
      <BrowserRouter>
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