interface pagesOnlyToggleProps {
    isChecked: boolean;
    onChange: (checked: boolean) => void
}


export default function PagesOnlyToggle(props: pagesOnlyToggleProps) {
    const { isChecked, onChange } = props
    return (
        <>
            <label htmlFor="checkbox">Only books with a page count</label>
            <input id="checkbox" type="checkbox" checked={isChecked} onChange={(event) => onChange(event.target.checked)}/>
        </>
    )
}