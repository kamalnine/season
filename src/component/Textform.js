import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleReverserClick = (event) => {
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Reversed a string", "success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleOnChange = (event) => {
    console.log("Onchanged");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared", "success");
  };
  const handleCopyClick = () => {
    console.log("iam clicked")
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <h1>Enter your text here </h1>
          <textarea
            className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'lightblue' : 'white', color: props.mode === 'dark' ? 'purple' : 'black' }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="13"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>

        <button className="btn btn-primary mx-3" onClick={handleDownClick}>
          Convert to lowercase
        </button>

        <button className="btn btn-primary mx-3" onClick={handleReverserClick}>
          reverse the text
        </button>

        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear the text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopyClick}>
          Copy the text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Text summary </h1>
        <p>
         
          total count of words = {text.length ===0?0:(text.split(" ").length)-1},
           total count of characters = {text.length}
           
        </p>
        
        <p>
          time required to read these words = {0.008 * text.split(" ").length}{" "}
          minutes required
        </p>
        <h3>Text Preview</h3>
        <p>{text.length > 0 ? text : 'Enter something in textbox above to preview it here'}</p>
      </div>
    </>
  );
}
