import { useState } from "react";





export default function ConfirmButton(props:{label:string, onConfirm: ()=>void}) {
    const [inConfirmState, setConfirmState] = useState(false)
    if (inConfirmState===false) {return ( <button type="button" aria-label={props.label} onClick={()=>setConfirmState(true)}>
                        {props.label.trim()}
                    </button>)}
    else {return (<>
                    <button type="button" aria-label={"Confirm"}>
                        Confirm
                    </button>

                    <button type="button" aria-label={"Cancel"}>
                        Cancel
                    </button>
                </>)
    }
}