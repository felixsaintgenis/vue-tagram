import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyBX3q5Wl8Xz83tBF1fh67uAPYLMM949aJk",
    authDomain: "vue-stagram-56b52.firebaseapp.com",
    databaseURL: "https://vue-stagram-56b52.firebaseio.com",
    projectId: "vue-stagram-56b52",
    storageBucket: "vue-stagram-56b52.appspot.com",
    messagingSenderId: "235696558570"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}