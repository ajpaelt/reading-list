import type { Book } from '../types'

export function ReadCounter(props: {books:Book[]}) {
    const readCount = props.books.filter((book) => book.is_read).length;
    return (
        <h3>Read: {readCount}</h3>
    )
}