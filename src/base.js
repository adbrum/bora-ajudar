import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBp_XSjSU6iIPWL7MLXOg2ZNUErWFqBgDo",
    authDomain: "bora-ajudar-3fc2c.firebaseapp.com",
    databaseURL: "https://bora-ajudar-3fc2c.firebaseio.com",
    projectId: "bora-ajudar-3fc2c",
    storageBucket: "bora-ajudar-3fc2c.appspot.com",
    messagingSenderId: "1000049314265"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
export const auth = firebase.auth()

export default base