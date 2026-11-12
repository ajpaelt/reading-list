import Header from "./components/Header"
import Footer from "./components/Footer"
import BookList from "./components/BookList";
import ResultCount from "./components/ResultCount";
import { useState } from "react";
import { BOOKS } from "./data/books";
import type { Book, StatusFilter } from "./types";
import ResetShelf from "./components/ResetShelf";
import {FilterBar} from './components/FilterBar'
import SearchBox from "./components/SearchBox";

function App() {
    
    const [books, setBooks] = useState<Book[]>(BOOKS);

    const [filter, setFilter] = useState<StatusFilter>("all");

    const [search, setSearch] = useState<string>("")

    function filterBooks(search:string,books:Book[]) {
        let arrOut = books.filter((book) => {
            if (filter === 'all') {return true}
            else {return filter === 'read'?book.is_read:!book.is_read}
        });
        arrOut = arrOut.filter((book) => {
            return book.title.trim().toLowerCase().search(search.trim().toLowerCase()) !== -1
            || book.author.trim().toLowerCase().search(search.trim().toLowerCase()) !== -1
        });
        return arrOut

    }

    const visibleBooks = filterBooks(search,books)

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
        <div className="page">
            <Header />
            <main>
                <SearchBox value={search} onChange={setSearch}/>
                <ResultCount books={books}/>
                <p></p>
                <ResetShelf onResetBooks = {() => setBooks(BOOKS)} />
                <p></p>
                <FilterBar current={filter} onChange={setFilter}/>

                <BookList heading={filter} books = {visibleBooks} onToggleRead = {toggleRead} onDelete = {deleteBook}/>
            </main>
            <Footer />
        </div>
    )
}

export default App