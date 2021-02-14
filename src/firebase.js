import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC0tBGJnJp7Z6fostdmX4qbqp7MI-JSbLA',
  authDomain: 'todo-app-c4dcb.firebaseapp.com',
  projectId: 'todo-app-c4dcb',
  storageBucket: 'todo-app-c4dcb.appspot.com',
  messagingSenderId: '24925878005',
  appId: '1:24925878005:web:e40d3d82aaa939436277bc',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
