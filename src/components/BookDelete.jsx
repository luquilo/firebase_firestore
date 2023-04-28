const BookDelete = () => {

    const submitHandler = event => {
        event.preventDefault()
    }
    
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="delete">enter the book id: </label>
                <input type="text" name="delete" />
            
                <button type="submit">delete book</button>
            </form>
        </div>
    )
}

export default BookDelete