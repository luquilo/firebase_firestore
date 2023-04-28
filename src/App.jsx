import "./App.css";
import { initializeApp } from "firebase/app";
import {
  getFirestore, // used to initialize the firebase app
  collection, // used to make a collection of data from the firebase
  getDocs, // get the document from the firebase
  addDoc, // a method to adding a new data to the firebase
} from "firebase/firestore";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import BookDelete from "./components/BookDelete";
import { useEffect, useState } from "react";

function App() {
  // firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyCyCZW_wsJeslsSZTA3oQ45W91E_wCjj58",
    authDomain: "fir-9-practice-b4578.firebaseapp.com",
    projectId: "fir-9-practice-b4578",
    storageBucket: "fir-9-practice-b4578.appspot.com",
    messagingSenderId: "536735699566",
    appId: "1:536735699566:web:38a0612ff09a3f58574c7f",
  };

  const [currentBooks, setCurrentBook] = useState([]);
  const [childData, setChildData] = useState("kosong");

  console.log(currentBooks);
  console.log(childData);

  // init firebase app
  initializeApp(firebaseConfig);

  // init service
  const db = getFirestore();

  // collection reference
  const colRef = collection(db, "books");

  // get collection data ( return a promise )
  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        let books = [];
        snapshot.docs.forEach((doc) => {
          books.push({ ...doc.data(), id: doc.id });
        });
        setCurrentBook(books);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const addBookForm = async (data) => {
    setChildData(data);
    const book = await data;
    console.log(book);
    console.log(typeof book);

    // console.log(childData)

    setTimeout(() => {
      addDoc(colRef, {
        title: book.title,
        author: book.author,
      });// the second argument is the new document that we wanna to the firebase collection
    }, 3000);
  };

  return (
    <div className="container">
      <BookForm addBookForm={addBookForm} />
      <h1>delete form</h1>
      <BookDelete />
      <BookList />
    </div>
  );
}

export default App;
