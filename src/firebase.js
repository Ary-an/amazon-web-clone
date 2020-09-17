import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBHUuyNtFvTQmpQnzo7Nnw6WN0jhqlBfX4",
	authDomain: "react-clone-ama.firebaseapp.com",
	databaseURL: "https://react-clone-ama.firebaseio.com",
	projectId: "react-clone-ama",
	storageBucket: "react-clone-ama.appspot.com",
	messagingSenderId: "1023175101411",
	appId: "1:1023175101411:web:93104b23dde767f528aed6",
	measurementId: "G-RRGC4FLF2D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
