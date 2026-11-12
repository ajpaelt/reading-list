import type { ChangeEventHandler, SubmitEventHandler } from 'react';
import type { FormValues } from '../types'

interface BookFormProps {
  onAddBook: SubmitEventHandler<HTMLFormElement>
  onChange: (field: "title"|"author"|"genre")=> ChangeEventHandler;

}

export type FormField = "title"|"author"|"genre";







export default function BookForm(props:BookFormProps) {
    const {onAddBook,onChange} = props

    
    return (        
        <form id="bookForm" onSubmit={onAddBook}>
            <label htmlFor="bookForm" className="h2">
                Add a book:
            </label>
            <p></p>
            <label htmlFor="title" className="h3">
                Title:
            </label>
            <input id="title" onChange={onChange("title")}>
            </input>
            <label htmlFor="author" className="h3">
                Author:
            </label>
            <input id="author"  onChange={onChange("author")}>
            </input>
            <label htmlFor="genre" className="h3">
                Genre:
            </label>
            <input id="genre" onChange={onChange("genre")}>
            </input>
            <button type="submit" className="btn">Submit</button>
        </form>
    )
}