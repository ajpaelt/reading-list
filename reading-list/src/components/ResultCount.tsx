import type {Book} from '../types'


function ResultCount(props:{books:Book[]}) {
    return (
        <h3 className ="result-count">
            {"Showing " + props.books.length +" books"}
        </h3>
    )
}

export default ResultCount