import React from 'react'
import { SetState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar.component'
import DebaterList from './components/debaterlist.component'
import EditDebater from './components/editdebater.component'
import CreateDebater from './components/createdebater.component'

export default function App() {
  return (
    <>
      <Router>
            <Navbar />
            <br />
            <Routes>
              <Route path="/" element={<DebaterList />} />
              <Route path="/update/:id" element={<EditDebater />} />
              <Route path="/create" element={<CreateDebater />} />
            </Routes>
            
          
      </Router>
    </>

  )
}