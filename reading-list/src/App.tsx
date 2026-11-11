import Header from "./components/Header"
import Footer from "./components/Footer"
import BookList from "./components/BookList";
import ResultCount from "./components/ResultCount";
import { useState } from "react";
import { BOOKS } from "./data/books";
import type { Book } from "./types";
import ResetShelf from "./components/ResetShelf";

function App() {
    const [books, setBooks] = useState<Book[]>(BOOKS);
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
                <ResultCount/>
                <ResetShelf onResetBooks = {() => setBooks(BOOKS)} />
                <BookList books = {books} onToggleRead = {toggleRead} onDelete = {deleteBook}/>
            </main>
            <Footer />
        </body>
    )
}

export default App