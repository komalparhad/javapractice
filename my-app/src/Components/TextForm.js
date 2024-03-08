import React,{useState} from 'react'

export default function (props)
{
    const handleUPClick =()=>{
        //console.log("Uppercase was clicked")
        setText(text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");

    }
    const handleDownClick=()=>
    {
        setText(text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success");
    }
    const ReverseText=()=>
    {
        let newtext="";
        //let newtext=text.split("").reverse().join("");
        for(let i=text.length-1;i>=0;i--)
        {
            newtext =newtext+text[i];
        }
        setText(newtext)
        props.showAlert("Reversed text","success");
    }
    const ClearText=()=>
    {
        let newText=('');
        setText(newText);
        props.showAlert("Cleared Text","success");
    }
    const Speech=()=>
    {
        let speech=new SpeechSynthesisUtterance();
        speech.text=text;
        speech.pitch=1;
        speech.rate=1;
        speech.volume=12;
        window.speechSynthesis.speak(speech);
        props.showAlert("Speech started","success")
    
    }

    const RemoveExtraSpaces=()=>
    {
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed Extra Spaces","success");



    }
    const CopyText=()=>
    {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied text","success");
    }

    const handleOnCheck=(event)=>{
        //console.log("On change")
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    //text="new text"  //wrong way to change state
    //setText("new text") //correct way to change the state
   
  return (
    <>
 <div className="container" style={{color:props.mode==='light'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnCheck} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="10"></textarea>
  </div>
  <button className="btn-primary mx-1" onClick={handleUPClick}>Convert to Uppercase</button>
  <button className="btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
  <button className="btn-primary mx-2" onClick={ReverseText}>Reverse text</button>
  <button className="btn-primary mx-2" onClick={RemoveExtraSpaces}> Remove Extra Spaces</button>
  <button className="btn-primary mx-2" onClick={CopyText}>Copy text</button>
  <button className="btn-primary mx-2" onClick={Speech}>Speech</button>
  <button className="btn-primary mx-2" onClick={ClearText}>Clear-Text</button>
  </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'black':'white'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length-1} character</p>
        <p>{0.008* text.split(" ").length} Minutes reads</p>
        <p>{text.split(/[".?!"]/).length-1}:No of sentences </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text here "}</p>
    </div>
    </>
  )
}
