import { useState } from "react"
import PropTypes from "prop-types";


const BookDelete = (props) => {

    const [enteredBookId, setEnteredBookId] = useState('')

    const bookIdChangeHandler = (event) => {
        setEnteredBookId(event.target.value)
    }


    const submitHandler = event => {
        event.preventDefault()
        console.log(enteredBookId)

        props.deleteBookForm(enteredBookId)

        setEnteredBookId('')
    }
    
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="delete">enter the book id: </label>
                <input 
                    type="text" 
                    name="delete" 
                    onChange={bookIdChangeHandler}
                    value={enteredBookId}
                    required 
                    />
            
                <button type="submit">delete book</button>
            </form>
        </div>
    )
}

BookDelete.propTypes = {
    deleteBookForm: PropTypes.func.isRequired
}

export default BookDelete