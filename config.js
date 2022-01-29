import firebase from 'firebase';
//require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBdqRplBsViO0Y60GuZ2d_YdYbAU6SvEpQ",
  authDomain: "project-74-9823e.firebaseapp.com",
  projectId: "project-74-9823e",
  storageBucket: "project-74-9823e.appspot.com",
  messagingSenderId: "210029569229",
  appId: "1:210029569229:web:7bbcc70bc0201afffd3584"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
