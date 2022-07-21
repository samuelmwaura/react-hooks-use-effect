import React, { useState, useEffect } from "react";

function App() {
const [count,setCount]=useState(0);
const [text,setText] = useState(' ');

  useEffect(() => {
    console.log("useEffect called"); 
  },[count]);

  useEffect(()=>{
    document.title = text;
  },[text])
  console.log("Component rendering");

  useEffect(()=>{
    setTimeout(()=>setCount(0),5000);
  },[]);

  return (
  <div>
  <button onClick={()=>setCount(count + 1)}>I have been clicked {count} times.</button>
  <input type= 'text' placeholder="Type Away ..." value={text} onChange={event=>setText(event.target.value)}/>
  </div>
  )

}

export default App;
