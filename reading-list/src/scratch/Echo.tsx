import { useState } from "react";

export default function Echo() {
  const [text, setText] = useState("");
  return (
    <div>
      <label htmlFor="echo">Say something</label>
      <input id="echo" value = {text} onChange = {(event) => setText(event.target.value)} type="text" />
      <p>You typed {text.length} characters.</p>
    </div>
  );
}   