import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
 
 
const app = firebase.initializeApp({
    apiKey: "AIzaSyANZDTMab7c8lMToVEO5ZP0EV-PW-b9pMo",
    authDomain: "hashi-unlimited-puzzle.firebaseapp.com",
    databaseURL: "https://hashi-unlimited-puzzle.firebaseio.com",
    projectId: "hashi-unlimited-puzzle",
    storageBucket: "hashi-unlimited-puzzle.appspot.com",
    messagingSenderId: "195447701699"
})
 
 
 
const db = firebase.database(app)
 
export const auth = app.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
 
export default Rebase.createClass(db)