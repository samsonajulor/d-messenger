import './App.css'
import { useState, Fragment } from 'react'
import Dashboard from './Dashboard'
import Error from './Error'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Redirect
} from 'react-router-dom'
import Login from './Login'
import PrivateRoute from './PrivateRoute'


function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route
            path='/groups/:groupId'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          {/* <Route exact path='/groups/:groupId'>
            {isUser ? <Navigate to='/dashboard' /> : <Login />}
          </Route> */}
          {/* <Route
          path='/'
          exact={true}
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />{' '} */}
          {/* <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<Dashboard />} />
          </Route> */}
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/login' exact={true} element={<Login />} />
          <Route path='*' element={<Error />} />
          {/* <PrivateRoute exact path='/dashboard' element={<Dashboard/>} /> */}
          {/* <Route path='/login' element={<Navigate replace to='/login' />} /> */}
        </Routes>
      </Fragment>
    </Router>
  )
}

export default App
