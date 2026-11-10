import { BOOKS } from "../data/books"
import BookCard from "./BookCard"


function BookList() {
    if (BOOKS.length === 0) {
        return (
            <ul className="book-list">
                <li className="empty-state">
                    <p>
                        No books to show
                    </p>
                </li>
            </ul>
        )
    }
    return (
        <ul className="book-list">
            {BOOKS.map((book) => 
                <BookCard key = {book.id} title = {book.title} isRead= {book.is_read} author = {book.author} genre = {book.genre}/>
            )}
        </ul>
    )
}

export default BookList