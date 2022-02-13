
import firebase from 'firebase/app'
import 'firebase/firestore'


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
firebase.initializeApp(firebaseConfig);
export default firebase


// const db = firebase.initializeApp(firebaseConfig.firestore())
// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider()

// export {auth, provider}