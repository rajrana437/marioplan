import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
  apiKey: 'AIzaSyCak4iu5XVN4BKrCcoDXjWL_ErM7mmv8bU',
  authDomain: 'marioplan-fa837.firebaseapp.com',
  projectId: 'marioplan-fa837',
  storageBucket: 'marioplan-fa837.appspot.com',
  messagingSenderId: '646821804477',
  appId: '1:646821804477:web:865db95b78d3f1823d7ad4',
  measurementId: 'G-EGPGFW62FD',
  userProfile: 'users',
  useFirestoreForProfile: true,
};

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
