import React, {useState} from 'react'

export default function Textform(props) {
  
  const handleChange =  (event)=>{
    // console.log('handle change');
    setText(event.target.value);
  }
  const handleUp = ()=>{
    // console.log('uppercase clicked');
    setText(text.toUpperCase());
    props.showAlert('Converted to uppercase', 'success');
  }
  const handleLow = ()=>{
    // console.log(lowercase clicked);
    setText(text.toLowerCase());
    props.showAlert('Converted to lowercase', 'success');
  }
  const handleClear = ()=>{
    // console.log(cleared);
    setText('');
    props.showAlert('Text cleared', 'danger');
  }

  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert('Text Copied', 'success');
  }

  function speak() {
    // console.log(lowercase clicked);
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert('Speak enabled', 'success');
  }

  const [text, setText] = useState('');  
  
  return (
    <>
  
    <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
    <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className={`form-control text-${props.mode === 'light'?'dark':'light'} bg-${props.mode === 'light'?'light':'black'}`} onChange={handleChange} id="myBox" rows="7" value={text}></textarea>
        </div>

        <button disabled={text.length===0} className="btn_primary mx-1 my-1" onClick={handleUp}>uppercase</button>
        <button disabled={text.length===0} className="btn_primary mx-1 my-1" onClick={handleLow}>lowercase</button>
        <button disabled={text.length===0} className="btn_primary mx-1 my-1" onClick={handleCopy}>copy</button>
        <button disabled={text.length===0} className="btn_primary mx-1 my-1" onClick={handleClear}>clear</button>
        <button disabled={text.length===0} className="btn mx-1 btn-success" onClick={speak}>speak</button>

    </div>

    <div className="container my-3">
        <h3>Your text</h3>
        <p><big>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</big></p>

        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minute read</p>

    
        <h3>Text preview</h3>
        <p><big>{text.length>0 ? text:<i>Nothing to preview...</i>}</big></p>
    </div>
    </div>  
    </>
    
  )
}
