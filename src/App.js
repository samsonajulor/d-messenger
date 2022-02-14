import './App.css'
import { useState } from 'react'
import Dashboard from './Dashboard'
import Error from './Error'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Login from './Login'

function App() {

  return (
        <Router>
          <Routes>
            <Route path='/groups/:groupId' element={<Dashboard />} />
            <Route path='/' exact={true} element={<Dashboard />} />{' '}
            <Route path='/login' exact={true} element={<Login />} />
            <Route path='*' element={<Error />} />
            {/* <Route path='/login' element={<Navigate replace to='/login' />} /> */}
          </Routes>
        </Router>
  )
}

export default App
