import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBLN6ZmZ6S9wwX1HZ62YpW3orXQ_INN7lQ",
    authDomain: "first-gallary.firebaseapp.com",
    projectId: "first-gallary",
    storageBucket: "first-gallary.appspot.com",
    messagingSenderId: "950020637817",
    appId: "1:950020637817:web:fa2d6ad3c8078bc86440a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage,projectFirestore,timeStamp};