
interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}



export default function SearchBox(props:SearchBoxProps) {
    const {value, onChange} = props
    return(
        <>
            <label htmlFor="SearchBox">Search: </label>
            <input id="SearchBox" value={value} onChange={(event)=>onChange(event.target.value)}/>
            {value && <button className="btn"  type="button" id="clearButton" onClick={()=>onChange("")}>Clear</button>} 
        </>
    )
}