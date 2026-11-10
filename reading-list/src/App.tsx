import Header from "./components/Header"
import Footer from "./components/Footer"
// import BookText from "./components/BookText"
import BookCard from "./components/BookCard";
import {BOOKS} from "./data/books"

let bookList = []
for (let book of BOOKS) {
    bookList.push(book)
}

function App() {

    return (
        <body className = "page">
            <Header />
            <main>
                <ul>
                    <BookCard title={BOOKS[0].title}
                        author={BOOKS[0].author}
                        genre={BOOKS[0].genre}
                        isRead={BOOKS[0].is_read}
                    />
                    <BookCard title={BOOKS[1].title}
                        author={BOOKS[1].author}
                        genre={BOOKS[1].genre}
                        isRead={BOOKS[1].is_read}
                    />
                    <BookCard title={BOOKS[2].title}
                        author={BOOKS[2].author}
                        genre={BOOKS[2].genre}
                        isRead={BOOKS[2].is_read}
                    />
                </ul> 
            </main>
            <Footer />
        </body>
    )
}

export default App