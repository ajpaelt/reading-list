
export interface ProgressBarProps {
    totalPages: number,
    pagesRead: number
}



function calculatePercentage(totalPages:number,pagesRead:number):number {
    let percentageRead = Math.round((pagesRead/totalPages)*100)
    percentageRead = percentageRead <= 100 ? percentageRead: 100
    return percentageRead
}


export default function ProgressBar(props:ProgressBarProps) {

    const {totalPages, pagesRead} = props
    
    const percentageRead = calculatePercentage(totalPages,pagesRead)

    return (
        
        <p role="progressbar" aria-valuenow={percentageRead} aria-valuemax={100} aria-valuemin={0} aria-label="Reading progress">
            {""+(percentageRead)+"%"}
        </p>
        
    )
}