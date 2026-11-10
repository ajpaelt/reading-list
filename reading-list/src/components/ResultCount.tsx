import { BOOKS } from "../data/books"

function ResultCount() {
    return (
        <h3 className ="result-count">
            {"Showing " + BOOKS.length +" books"}
        </h3>
    )
}

export default ResultCount