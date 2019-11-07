
import firebase from 'firebase/app'
import 'firebase/database'

export const deeb = firebase
    .initializeApp({
        apiKey: "AIzaSyChdIEVNyNJQFZdIKjKOSqSWs1T4DdnBTE",
        authDomain: "comunitariamayorista.firebaseapp.com",
        databaseURL: "https://comunitariamayorista.firebaseio.com",
        projectId: "comunitariamayorista",
        storageBucket: "comunitariamayorista.appspot.com",
        messagingSenderId: "211519611502",
        appId: "1:211519611502:web:f75c209b4895d25803bc7f"
    })
    .database()

