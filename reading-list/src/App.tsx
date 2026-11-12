import Header from "./components/Header"
import Footer from "./components/Footer"
import BookList from "./components/BookList";
import ResultCount from "./components/ResultCount";
import { useState } from "react";
import { BOOKS } from "./data/books";
import type { Book, StatusFilter } from "./types";
import ResetShelf from "./components/ResetShelf";
import {FilterBar} from './components/FilterBar'
import Echo from "./scratch/Echo";

function App() {
    
    const [books, setBooks] = useState<Book[]>(BOOKS);

    const [filter, setFilter] = useState<StatusFilter>("all");


    const visibleBooks = books.filter((book) => {
        if (filter === 'all') {return true}
        else {return filter === 'read'?book.is_read:!book.is_read}
    });

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
                <p></p>
                <ResetShelf onResetBooks = {() => setBooks(BOOKS)} />
                <p></p>
                <FilterBar current={filter} onChange={setFilter}/>
                <BookList heading={filter} books = {visibleBooks} onToggleRead = {toggleRead} onDelete = {deleteBook}/>
                {/* <BookList heading='Unread:' books = {unreadBooks} onToggleRead = {toggleRead} onDelete = {deleteBook}/> */}
                <Echo/>
            </main>
            <Footer />
        </body>
    )
}

export default App