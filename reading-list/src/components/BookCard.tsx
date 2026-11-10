import { BOOKS } from "../data/books";
import type { Book } from "../types";
import BookText from "./BookText";


// let book = BOOKS[0];
export interface BookCardProps {
  title: string;
  author: string;
  genre: string;
  isRead: boolean;
}

function BookCard (props:BookCardProps) {
    const {title} = props;
    const {genre} = props;
    const {author} = props;
    const {isRead} = props;

    return (
        <li className={isRead ? 'book-card is-read':'book-card'} >
            <BookText title={title} genre={genre} author={author} isRead = {isRead}/>
            <div className='book-actions'>
                <button className='book-actions' type = 'button' id='mark-read' aria-label={isRead ? 'mark-unread-'+title:'mark-read-'+title}>
                    {isRead ? 'Mark unread':'Mark read'}
                </button>
                <button className='book-actions' type = 'button' id='delete' aria-label={'delete-'+title}>
                    Delete
                </button>
            </div>
            {isRead && <p className="badge">Read!</p>}
        </li>
    );
}

export default BookCard