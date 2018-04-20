import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyBkY574ji5dt_d5WdV3RMRPmk4ywf2HD8Y',
  authDomain: 'testingforminefield.firebaseapp.com',
  databaseURL: 'https://testingforminefield.firebaseio.com',
  projectId: 'testingforminefield',
  storageBucket: 'testingforminefield.appspot.com',
  messagingSenderId: '776124392672'
})

export const db = app.database()
export const boardRef = db.ref('boards')
