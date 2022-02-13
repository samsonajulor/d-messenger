import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import Home from './Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <div className='app__body'>
        <Router>
          <Sidebar />
          <Routes>
            <Route
              path='/groups/:groupId'
              element={
                <>
                  <Chat />
                </>
              }
            />
            <Route path='/' element={<Chat />} />
            {/* <Route path='/' element={<Navigate replace to='/login' />} /> */}
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
