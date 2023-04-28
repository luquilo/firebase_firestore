import './App.css'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs

} from 'firebase/firestore'

function App() {

  // firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyCyCZW_wsJeslsSZTA3oQ45W91E_wCjj58",
    authDomain: "fir-9-practice-b4578.firebaseapp.com",
    projectId: "fir-9-practice-b4578",
    storageBucket: "fir-9-practice-b4578.appspot.com",
    messagingSenderId: "536735699566",
    appId: "1:536735699566:web:38a0612ff09a3f58574c7f"
  };


  // init firebase app
  initializeApp(firebaseConfig)


  // init service
  const db = getFirestore()


  // collection reference
  const colRef = collection(db, 'books')


  // get collection data ( return a promise )
  getDocs(colRef)
    .then((snapshot) => {
      let books = []
      snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
      })
      console.log(books)
    })
    .catch(error => console.log(error.message))


  


  return (
    <div className='container'>
      <h1>halo</h1>
    </div>
  )
}

export default App
