import React, { useState, useEffect } from 'react';
import axios from 'axios';

const rootUrl = 'https://api.github.com'

const loggedInUserContext = React.createContext()

const loggedInUserProvider = ({children}) => {
 return <loggedInUserContext.Provider value={'hello'}>{children}</loggedInUserContext.Provider>
}

export {loggedInUserContext, loggedInUserProvider}




