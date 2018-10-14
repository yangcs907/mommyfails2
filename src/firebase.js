import firebase from "firebase";

  const config = {
    apiKey: "AIzaSyCJbiisxN33I_iYPxKeUihkQDkK2G7-X-0",
    authDomain: "mommyfails-dd184.firebaseapp.com",
    databaseURL: "https://mommyfails-dd184.firebaseio.com",
    projectId: "mommyfails-dd184",
    storageBucket: "mommyfails-dd184.appspot.com",
    messagingSenderId: "858488591718"
  };
  firebase.initializeApp(config);
  export default firebase;
