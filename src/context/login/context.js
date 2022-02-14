import React, { useState, useEffect } from 'react';
import axios from 'axios';

const rootUrl = 'https://api.github.com'

const LoggedInUserContext = React.createContext()

const LoggedInUserProvider = ({children}) => {
 return <LoggedInUserContext.Provider value={'hello'}>{children}</LoggedInUserContext.Provider>
}

export {LoggedInUserContext, LoggedInUserProvider}




