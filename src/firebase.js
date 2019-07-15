import firebase from 'firebase/app';
import 'firebase/firestore';

// This is so weird, i don't need an api key?
const config = {
  // authDomain: 'telegram-quotes-bot.firebaseapp.com',
  projectId: 'telegram-quotes-bot',
};

// console.log(process.env)
// console.log(config)
firebase.initializeApp(config);
const Db = firebase.firestore();
export default Db;