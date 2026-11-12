function BookText (props: { title: string, genre: string, author: string, pages: number | undefined }) {
    const { title, genre, author, pages } = props
    return (
        <>
            <h3 className="book-title">{title}</h3>
            <p className="book-meta">{author+' · '+genre+ (pages !== undefined ? ' · ' +pages + ' pages' : '')}</p>
        </>
    )
}

export default BookText