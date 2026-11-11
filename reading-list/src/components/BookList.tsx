import type { Book } from "../types"
import BookCard from "./BookCard"


function BookList(props: {books: Book[], onToggleRead(id:number): void, onDelete(id:number): void }) {
    if (props.books.length === 0) {
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
            {props.books.map((book) => 
                <BookCard key = {book.id} id = {book.id} title = {book.title} isRead= {book.is_read} author = {book.author} genre = {book.genre} onToggleRead={props.onToggleRead} onDelete={props.onDelete}/>
            )}
        </ul>
    )
}

export default BookList