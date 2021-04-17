import firebase, { firestore } from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAmHSdAk97kCNHV1Pxxbtuh31Q_6TCgJTQ",
    authDomain: "todoist-clone-p21.firebaseapp.com",
    databaseURL: "https://todoist-clone-p21-default-rtdb.firebaseio.com",
    projectId: "todoist-clone-p21",
    storageBucket: "todoist-clone-p21.appspot.com",
    messagingSenderId: "814922758822",
    appId: "1:814922758822:web:38e85f7502f76063349267"
});

export { firebaseConfig as firebase }