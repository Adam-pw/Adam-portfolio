import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB78Aq0L2IB576kyLEmyfzFxB9ij0RFCGc",
  authDomain: "portfolio-65801.firebaseapp.com",
  databaseURL: "https://portfolio-65801-default-rtdb.firebaseio.com",
  projectId: "portfolio-65801",
  storageBucket: "portfolio-65801.appspot.com",
  messagingSenderId: "432743562677",
  appId: "1:432743562677:web:9faa442734de9342266dfc",
  measurementId: "G-LY2Y2ZY648"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export { database };

// const colRef = collection(db, "email");
// export default colRef;

// getDocs(colRef).then((snapshot) => {
//   let blogs = []
//   snapshot.docs.forEach((doc) => {
//     blogs.push({ ...doc.data(), id: doc.id })
//   })
//   console.log(blogs)
// });