


interface RatingPickerProps {
  value: number | null;
  onChange: (rating: number) => void;
}

export default function RatingPicker(props: RatingPickerProps) {
    const { value, onChange } = props
    const numArray: number[] = [1, 2, 3, 4, 5]

    return (
        <fieldset>
            <legend>
                Your rating
            </legend>
            {numArray.map((num) =>
            <label key={num}>
                <input
                value={num}
                type="radio"
                checked={value === num}
                aria-label={""+num}
                onChange={() => onChange(num)}/>
            </label>
                )}
        </fieldset>
    )
}


        // <fieldset className="book-actions">
        //     <legend>Status</legend>
        //     {options.map((option)=> {
        //         return (
        //             <>
        //                 <label htmlFor={option}/>
        //                 {option}
        //                 <input
        //                     className="btn"
        //                     key={option}
        //                     type="radio"
        //                     checked={current == option}
        //                     onChange={()=>onChange(option)}
        //                 />
        //             </>
        //         )}
        //     )}
        // </fieldset>




