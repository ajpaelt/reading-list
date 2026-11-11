import { use, useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    function increaseCount(count:number):void {
        count ++
        console.log(count)
    }
  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => {setCount(count+1)}}>
        Increase
      </button>
      {isOpen&&<p>Open!</p>}
      <button type= "button" onClick={() => {setIsOpen(true)}}>Open me</button>
    </div>
  );
}