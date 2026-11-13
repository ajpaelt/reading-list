import Header from "./components/Header"
import Footer from "./components/Footer"
import BookList from "./components/BookList";
import ResultCount from "./components/ResultCount";
import { useState } from "react";
import { BOOKS } from "./data/books";
import type { Book, FormValues, StatusFilter } from "./types";
import ResetShelf from "./components/ResetShelf";
import SearchBox from "./components/SearchBox";
import GenreSelect from "./components/GenreSelect";
import PagesOnlyToggle from "./components/CheckBox";
import { StatusRadio } from "./components/StatusRadio";
import type { FormField } from "./components/BookForm";
import type { ChangeEvent, FormEvent } from "react"
import BookForm from "./components/BookForm";

function App() {
    
    const [books, setBooks] = useState<Book[]>(BOOKS);

    const [filter, setFilter] = useState<StatusFilter>("all");

    const [genre, setGenre] = useState<string>("");

    const [search, setSearch] = useState<string>("");

    const [hasPages, setHasPages] = useState<boolean>(false);

    const [formValues, setFormValues] = useState<FormValues>({title:"",author:"",genre:""})

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

    function formChangeHandler(field: FormField) {
        return (event:ChangeEvent<HTMLInputElement>) => {
            setFormValues({...formValues,[field]:event.target.value})
        }
    }

    function clearForm() {
        setFormValues({title:"",author:"",genre:""})
    }

    function formSubmissionHandler(event:FormEvent<HTMLFormElement>) {
        event.preventDefault()
        let newBook:Book = {
            ...formValues, is_read:false,
            id:books.reduce((prev,next)=>next.id>prev.id?next:prev).id+1
        } 
        setBooks([...books, newBook])
        clearForm()
    }

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
                <p></p>
                <BookForm values={formValues} onChange={formChangeHandler} onAddBook={formSubmissionHandler} onClear={clearForm}/>
                <BookList heading={filter} books = {visibleBooks} onToggleRead = {toggleRead} onDelete = {deleteBook}/>
            </main>
            <Footer />
        </div>
    )
}

export default App