import type {StatusFilter} from '../types'


export function FilterBar(props:FilterBarProps) {
    const {onChange} = props
    return (
        <>
            <button className='btn' type='button' onClick={()=>onChange('all')}>All</button>
            <button className='btn' type='button' onClick={()=>onChange('read')}>Read</button>
            <button className='btn' type='button' onClick={()=>onChange('unread')}>Unread</button>
        </>
    )
}



interface FilterBarProps {
  current: StatusFilter;
  onChange: (filter: StatusFilter) => void;
}