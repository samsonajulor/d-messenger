import './App.css'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import Home from './Home'
import Error from './Error'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Login from './Login'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className='app'>
      <div className='app__body'>
      <Router>
        <Routes>
          <Route
            path='/groups/:groupId'
            element={
              <>
                <Sidebar />
                <Chat />
              </>
            }
          />{' '}
          <Route
            path='/'
            exact={true}
            element={
              <>
                <Sidebar />
                <Chat />
              </>
            }
          />{' '}
          <Route path='/login' exact={true} element={<Login />} />{' '}
          <Route path='*' element={<Error />} />{' '}
          {/* <Route path='/login' element={<Navigate replace to='/login' />} /> */}{' '}
        </Routes>
      </Router>
    </div>
    </div>
  )
}

export default App
