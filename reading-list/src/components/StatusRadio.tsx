import type {StatusFilter} from '../types'



export function StatusRadio(props:StatusRadioProps) {
    const {onChange, current} = props;
    const options:StatusFilter[] = ["all","read","unread"]

    return (
        <fieldset className="book-actions">
            <legend>Status</legend>
            {options.map((option)=> {
                return (
                    <>
                        <label htmlFor={option}/>
                        {option}
                        <input
                            className="btn"
                            id={option}
                            type="radio"
                            checked={current == option}
                            onClick={()=>onChange(option)}
                        />
                    </>
                )}
            )}
        </fieldset>
    )
}






interface StatusRadioProps {
  current: StatusFilter;
  onChange: (filter: StatusFilter) => void;
}