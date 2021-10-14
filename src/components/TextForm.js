import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log('uppercase was clicked: ' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Success: Converted to UpperCase", "success");

        // Adding Alerts :-
        // if (text.length===0){
        //     props.showAlert("Error: Please add some text", "danger");
        // }
        // else{
        //     props.showAlert("Success: Converted to UpperCase", "success");
        // }
    }

    const handleLowClick = () => {
        // console.log('uLowercase was clicked: ' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Success: Converted to LowerCase", "success");

        // Adding Alerts :-
        // if (text.length===0){
        //     props.showAlert("Error: Please add some text", "danger");
        // }
        // else{
        //     props.showAlert("Success: Converted to LowerCase", "success");
        // }
    }


    const capitalizeFirstLetter = () => {
        let str1 = text.charAt(0).toUpperCase();
        let str2 = text.slice(1);
        let newText = str1 + str2;
        // let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Success: First Letter Capitalized", "success");

        // Adding Alerts:-
        // if (text.length===0){
        //     props.showAlert("Error: Please add some text", "danger");
        // }
        // else{
        //     props.showAlert("Success: First Letter Capitalized", "success");
        // }
    }


    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Success: Text Cleared", "success");

        // Adding Alerts :-
        // if (text.length===0){
        //     props.showAlert("Error: Please add some text", "danger");
        // }
        // else{
        //     props.showAlert("Success: Text Cleared", "success");
        // }
    }

    const handleRemoveSpace = () => {
        let newText = text.replaceAll(" ","");
        setText(newText);
        props.showAlert("Success: Spaces Removed", "success");

        // Adding Alerts :-
        // if (text.length===0){
        //     props.showAlert("Error: Please add some text", "danger");
        // }
        // else{
        //     props.showAlert("Success: Spaces Removed", "success");
        // }
    }

    
    const handleCopy = () =>{
        var textArea = document.getElementById('myBox');
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Success: Text Copied", "success");

        // Adding Alerts :-
        // if (text.length===0){
        //     props.showAlert("Error: Please add some text", "danger");
        // }
        // else{
        //     props.showAlert("Success: Text Copied", "success");
        // }
    }


    const removeExtraSpace = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Extra Spaces removed", "success");

        // Adding Alerts :-
        // if (text.length===0){
        //     props.showAlert("Error: Please add some text", "danger");
        // }
        // else{
        //     props.showAlert("Extra Spaces removed", "success");
        // }
    }

    const handleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value);
    }


    return (
        <>
        <div className="container" style = {{color: props.mode === 'light'?'#080043':'white'}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" placeholder="Enter Text Here.." value={text}  onChange={handleOnChange} id="myBox" style = {{backgroundColor: props.mode==='light'?'white':'#010e57', color: props.mode === 'light'?'#080043':'white'}} rows="8"></textarea>
            </div>
            <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1" onClick={capitalizeFirstLetter}>Capitalize first letter</button>
            <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1" onClick={removeExtraSpace}>Remove Extra Space</button>
            <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>
            <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClearText}>Clear Text</button>
            <button disabled = {text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleRemoveSpace}>Remove Spaces</button>
        </div>
        
        <div className="container my-3" style = {{color: props.mode === 'light'?'#080043':'white'}}> 
            <h2>Your Text Summary</h2>

          {/* <p>{text.split(" ").length} words and {text.length} characters</p>   */}

          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>

          {/* <p>{0.008 * text.split(" ").length} minutes read</p>   */}

          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>  


          <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
