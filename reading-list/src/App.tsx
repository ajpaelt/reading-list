import Header from "./components/Header"
import Footer from "./components/Footer"
import BookText from "./components/BookText"

function App() {

    return (
        <body className = "page">
            <Header />
            <main>
                <div className="bookInfo">
                    <BookText />
                </div>  
            </main>
            <Footer />
        </body>
    )
}

export default App