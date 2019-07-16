import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  projectId: 'telegram-quotes-bot',
};

firebase.initializeApp(config);
const Db = firebase.firestore();
export default Db;
