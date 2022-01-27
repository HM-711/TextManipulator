import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to UPPERCASE","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to lowercase","success");
    }
    const handleClearText = ()=>{
        setText("");
        props.showAlert("Text has been cleared","success");
    }
    const handleCopyText = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied to clipboard","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed from the text","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container mb-3" style={{color: props.mode==="light"?"#000":"#fff"}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <textarea className="form-control" id="myBox" value={text} rows="7" onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?"#fff":"#333333", color: props.mode==="light"?"#000":"#fff"}}>
                </textarea>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleUpClick}>
                Convert to UPPERCASE
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleLowClick}>
                Convert to lowercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleClearText}>
                Clear Text
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleCopyText}>
                Copy Text
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleExtraSpaces}>
                Remove Extra Spaces
                </button>
            </div>
            <div className="container my-4" style={{color: props.mode==="light"?"#000":"#fff"}}>
                <h3>Text Summary</h3>
                {/* <p>Words - {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
                <p>Characters - {text.length}</p>
                <p>Time to read - {0.008 * text.split(/[ ]+/).filter((element)=>{return element.length!==0}).length}</p> */}
                <table className="mt-3 mb-3" style={{border: "2px solid black"}}>
                    <tr style={{border: "2px solid black"}}>
                        <th style={{border: "2px solid", padding:"20px", textAlign:"center"}}>Words</th>
                        <th style={{border: "2px solid", padding:"20px", textAlign:"center"}}>Characters</th>
                        <th style={{border: "2px solid", padding:"20px", textAlign:"center"}}>Time to Read</th>
                    </tr>
                    <tr>
                        <td style={{border: "2px solid", padding:"20px", textAlign:"center"}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</td>
                        <td style={{border: "2px solid", padding:"20px", textAlign:"center"}}>{text.length}</td>
                        <td style={{border: "2px solid", padding:"20px", textAlign:"center"}}>{0.008 * text.split(/[ ]+/).filter((element)=>{return element.length!==0}).length}</td>
                    </tr>
                </table>
                <h3 className="mt-4">Preview</h3>
                <p>{text.length>0?text:"Enter text to preview"}</p>
            </div>
        </>
    )
}
