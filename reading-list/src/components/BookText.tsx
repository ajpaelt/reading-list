import type {BookCardProps} from './BookCard'

function BookText (props: BookCardProps) {
    const { title, genre, author } = props
    return (
        <>
            <h3 className="book-title">{title}</h3>
            <p className="book-meta">{author+' · '+genre}</p>
        </>
    )
}

export default BookText