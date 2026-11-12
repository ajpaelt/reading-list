import BookText from "./BookText";


// let book = BOOKS[0];
export interface BookCardProps {
    id: number;
  title: string;
  author: string;
  genre: string;
  isRead: boolean;
  pages?: number;
  onToggleRead: (id:number) => void;
  onDelete: (id:number) => void;
}

function BookCard (props:BookCardProps) {
    const {id, title, genre, author, isRead, pages, onToggleRead, onDelete} = props;

    return (
        <li className={isRead ? 'book-card is-read':'book-card'} >
            {isRead && <p className="badge">Read!</p>}
            <BookText title={title} genre={genre} author={author} pages={pages}/>
            <div className='book-actions'>
                <button onClick = {() => onToggleRead(id)} className='book-actions' type = 'button' id='mark-read' aria-label={isRead ? 'mark-unread-'+title:'mark-read-'+title}>
                    {isRead ? 'Mark unread':'Mark read'}
                </button>
                <button onClick = {() => onDelete(id)} className='book-actions' type = 'button' id='delete' aria-label={'delete-'+title}>
                    Delete
                </button>
            </div>
            
        </li>
    );
}

export default BookCard