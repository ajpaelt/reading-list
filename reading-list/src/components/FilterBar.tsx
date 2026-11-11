import type {StatusFilter} from '../types'


export function FilterBar(props:{filter:StatusFilter, onSetFilter(filter:StatusFilter):void }) {
    const {filter, onSetFilter} = props
    return (
        <>
            <button className='btn' type='button' onClick={()=>onSetFilter('all')}>All</button>
            <button className='btn' type='button' onClick={()=>onSetFilter('read')}>Read</button>
            <button className='btn' type='button' onClick={()=>onSetFilter('unread')}>Unread</button>
        </>
    )
}



interface FilterBarProps {
  current: StatusFilter;
  onChange: (filter: StatusFilter) => void;
}