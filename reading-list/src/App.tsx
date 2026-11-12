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
import GenreSelect from "./components/GenreSelect";
import PagesOnlyToggle from "./components/CheckBox";
import { StatusRadio } from "./components/StatusRadio";

function App() {
    
    const [books, setBooks] = useState<Book[]>(BOOKS);

    const [filter, setFilter] = useState<StatusFilter>("all");

    const [genre, setGenre] = useState<string>("");

    const [search, setSearch] = useState<string>("");

    const[hasPages, setHasPages] = useState<boolean>(false);

    const genreList = ["",...Array.from(new Set(books.map((book) => {
        return book.genre
    })))];

    function filterBooks(search:string,books:Book[]) {
        let arrOut = books.filter((book) => {
            if (filter === 'all') {return true}
            else {return filter === 'read'?book.is_read:!book.is_read}
        });
        arrOut = arrOut.filter((book) => {
            return book.title.trim().toLowerCase().includes(search.trim().toLowerCase())
            || book.author.trim().toLowerCase().includes(search.trim().toLowerCase())
        });
        arrOut = arrOut.filter((book) => {
            return book.genre.includes(genre)
        })
        arrOut = arrOut.filter((book) => {
            return hasPages ? book.pages !== undefined : true
        })
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
                <GenreSelect genreList={genreList} genre={genre} onChange={setGenre}/>
                <PagesOnlyToggle isChecked={hasPages} onChange={setHasPages}/>
                <ResultCount books={books}/>
                <p></p>
                <ResetShelf onResetBooks = {() => setBooks(BOOKS)} />
                <p></p>
                <StatusRadio current={filter} onChange={setFilter}/>

                <BookList heading={filter} books = {visibleBooks} onToggleRead = {toggleRead} onDelete = {deleteBook}/>
            </main>
            <Footer />
        </div>
    )
}

export default App