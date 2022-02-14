import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {loggedInUserContext, loggedInUserProvider} from './context/login/context'
import {Auth0Provider} from '@auth0/auth0-react'


//samsonajulor.us.auth0.com
//WpD4LaJfJkmlO7EDQb3dwQ2a9oTyTAYy
//Wi1l-sBd5_kYMMtzpmbHajIV16X3GQQxGHx0MYM8S9RW_WyPRWxqkbvWEmadveCP

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='samsonajulor.us.auth0.com'
      clientId='WpD4LaJfJkmlO7EDQb3dwQ2a9oTyTAYy'
      redirectUri={window.location.origin}
    >
      <loggedInUserContext>
        <App />
      </loggedInUserContext>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
