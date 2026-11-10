import Header from "./components/Header"
import Footer from "./components/Footer"
import BookList from "./components/BookList";
import ResultCount from "./components/ResultCount";

function App() {

    return (
        <body className = "page">
            <Header />
            <main>
                <ResultCount/>
                <BookList/>
            </main>
            <Footer />
        </body>
    )
}

export default App