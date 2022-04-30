import React, { useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFUzm27n9IkIV820A_VyyvCXb9v8cBI8A",
  authDomain: "hackher-9b4ed.firebaseapp.com",
  databaseURL: "https://hackher-9b4ed.firebaseio.com",
  projectId: "hackher-9b4ed",
  storageBucket: "hackher-9b4ed.appspot.com",
  messagingSenderId: "875167518655",
  appId: "1:875167518655:web:80d75cb77d63f227601b0a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// signOut(auth)
//   .then(() => {
//     // Sign-out successful.
//   }).catch((error) => {
//     // An error happened.
//   });

export default function App() {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  function handleSubmit(e) {
    console.log("called");
    createUserWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
      .then(user => console.log(user))
      .catch(err => console.log(err));
  };

  return (
    <>
      <form style={{margin: '2vh 2vw'}}>
        <label for="email">Email Address:</label><br />
        <input type="email" id="email" name="email" ref={emailRef}></input><br />
        <label for="password">Password:</label><br />
        <input type="password" id="password" name="password" ref={passRef}></input><br />
        <input type="submit" value="Sign Up" onClick={handleSubmit}></input>
        <input type="reset"></input>
      </form>
    </>
  )
}