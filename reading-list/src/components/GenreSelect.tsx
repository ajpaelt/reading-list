
interface genreListProps {
    genre: string;
    genreList: string[];
    onChange: (value: string) => void
    }

export default function(props: genreListProps) {
    const {genreList, onChange, genre} = props
    return (
        <select value={genre} onChange={(event)=> onChange(event.target.value)}>
            {genreList.map((genre) => <option value={genre}>{genre ? genre : "all genres"}</option>)}
        </select>
    )
}