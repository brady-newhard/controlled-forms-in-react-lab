import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState(
        { title: '', author: '' },
    );
    const handleBookChange = (e) => {
        setNewBook({
            ...newBook, [e.target.name]: e.target.value,
        });
    }

    const handleBookSubmit = (e) => {
        e.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' });
    }

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleBookSubmit}>
                        <label htmlFor="title">Title:</label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            value={newBook.title}
                            onChange={handleBookChange}
                        />
                        <br />
                        <label htmlFor="author">Author:</label>
                        <input
                            id="author"
                            type="text"
                            name="author"
                            value={newBook.author}
                            onChange={handleBookChange}
                        />
                        <br />
                        <button type="submit">Add Book</button>
                    </form>
                </div>
                <div className="bookCardsDiv">
                    {books.map((book, index) => (
                        <div key={index} className="bookCard">
                            <h3>{book.title}</h3>
                            <p>by {book.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Bookshelf;