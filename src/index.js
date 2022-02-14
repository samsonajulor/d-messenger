import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {LoggedInUserContext, LoggedInUserProvider} from './context/login/context'
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='samsonajulor.us.auth0.com'
      clientId='WpD4LaJfJkmlO7EDQb3dwQ2a9oTyTAYy'
      redirectUri={window.location.origin}
    >
      {/* <LoggedInUserContext> */}
        <App />
      {/* </LoggedInUserContext> */}
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
