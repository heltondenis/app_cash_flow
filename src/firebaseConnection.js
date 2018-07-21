import firebase from 'firebase';

let config = {
	apiKey: "AIzaSyDmu51X7yzPyhnrA_jtV_wk7qFyEQCjY9E",
    authDomain: "appcashflow-797c2.firebaseapp.com",
    databaseURL: "https://appcashflow-797c2.firebaseio.com",
    projectId: "appcashflow-797c2",
    storageBucket: "",
    messagingSenderId: "610653461631"
};

firebase.initializeApp(config);

export default firebase;