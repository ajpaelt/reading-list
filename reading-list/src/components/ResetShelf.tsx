
function ResetShelf(props: {onResetBooks(): void}) {
    return (
        <button onClick={() => {props.onResetBooks()}} className= "btn" type="button" aria-label="Reset shelf">
            Reset shelf
        </button>
    )
}

export default ResetShelf