import { useState } from "react";
import PropTypes from "prop-types";

const BookForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    

    const book = {
      title: enteredTitle,
      author: enteredAuthor,
    };

    console.log(book) 
    console.log(typeof book)
    props.addBookForm(book)

   setEnteredTitle('')
   setEnteredAuthor('')
    

  };

  return (
    <div>
      <h1>book form</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">book title</label>
        <input
          name="title"
          type="text"
          required
          onChange={titleChangeHandler}
          value={enteredTitle}
        />
        <label htmlFor="author">book author</label>
        <input
          name="author"
          type="text"
          required
          onChange={authorChangeHandler}
          value={enteredAuthor}
        />
        <button type="submit">add a new book</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  addBookForm: PropTypes.func.isRequired,
  // setNewBook: PropTypes.func.isRequired
};

export default BookForm;
