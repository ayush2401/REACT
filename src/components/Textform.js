import React, {useState} from "react"


export default function Textform(props) {
  const [ text, setText] = useState("");

  const upClick = () => {
    let newText = text.toUpperCase();
      setText(newText);
      props.showAlert('success' , 'converted to upper case')

  }

  const lowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('success' , 'converted to lower case')
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
    <div className="container my-3">
      <h1 style={{color : props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" placeholder="Enter text" style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white'}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={upClick}> Uppercase </button>
      <button className="btn btn-primary" onClick={lowClick}> Lowercase </button>

    </div>

    <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>Text summary </h1>
      <p> {text.split(" ").length} words and {text.length} characters </p>
      <h2> Preview </h2>
      <p> {text} </p>
    </div>
    </>
  );
}
