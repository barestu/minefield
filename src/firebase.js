import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyD9EaNrByNxcdAOj3nfuUmSzV_t-uMEHE0',
  authDomain: 'minefield-cf0b7.firebaseapp.com',
  databaseURL: 'https://minefield-cf0b7.firebaseio.com',
  projectId: 'minefield-cf0b7',
  storageBucket: 'minefield-cf0b7.appspot.com',
  messagingSenderId: '185462919014'
})

export const db = app.database()
export const boardRef = db.ref('boards')
