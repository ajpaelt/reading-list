import Header from "./components/Header"
import Footer from "./components/Footer"
import BookList from "./components/BookList";
import ResultCount from "./components/ResultCount";
import { useState } from "react";
import { BOOKS } from "./data/books";
import type { Book } from "./types";
import ResetShelf from "./components/ResetShelf";
import { ReadCounter } from "./components/ReadCounter"


function App() {
    
    const [books, setBooks] = useState<Book[]>(BOOKS);
    const unreadBooks = books.filter((book) => !book.is_read);
    const readBooks = books.filter((book) => book.is_read);
    function toggleRead(id: number) {
        setBooks((currBooks) => 
            currBooks.map((book) => 
                (book.id === id ? {...book, is_read: !book.is_read} : book)
            ))
    };
    function deleteBook(id: number) {
        setBooks((currBooks) =>
        currBooks.filter((book) =>
        book.id !== id
        ))
    };



    return (
        <body className = "page">
            <Header />
            <main>
                <ResultCount books={books}/>
                {/* <ReadCounter books={books}/> */}
                <ResetShelf onResetBooks = {() => setBooks(BOOKS)} />
                <BookList heading='Read:' books = {readBooks} onToggleRead = {toggleRead} onDelete = {deleteBook}/>
                <BookList heading='Unread:' books = {unreadBooks} onToggleRead = {toggleRead} onDelete = {deleteBook}/>

            </main>
            <Footer />
        </body>
    )
}

export default App