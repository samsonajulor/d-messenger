// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import * as firebase from 'firebase'
import firebase from 'firebase/compat/app'
import 'firebase/firestore'

import * as Firebase from 'firebase/compat/app'
import 'firebase/firestore'
// import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAwMhZGmf5QeNM-2Ubnykx0e74in_cXf7Q',
  authDomain: 'd-messenger-samson.firebaseapp.com',
  projectId: 'd-messenger-samson',
  storageBucket: 'd-messenger-samson.appspot.com',
  messagingSenderId: '615028719438',
  appId: '1:615028719438:web:9266c23b80dec6a48fa81f',
  measurementId: 'G-BQ6L5TT0LQ',
  databaseURL: 'https://d-messenger-samson.firebaseio.com',
}

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig)
// firebase.initializeApp(firebaseConfig)
// const db = app.firestore()
// const db = firebase.firestore()
// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider()

// export { auth, provider }
// export default db

const db = firebase.initializeApp(firebaseConfig.firestore())

export default db