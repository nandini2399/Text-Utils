import React, {useState} from 'react'

export default function Navbar(props){
    const[text,setText] = useState('');

    const onChange = (event)=>{
        //console.log("Inside on change");
        setText(event.target.value)
    }

    const toUpper = ()=>{
        var nt = text.toUpperCase();
        setText(nt);
    }

    const toLower = ()=>{
        var nt = text.toLowerCase();
        setText(nt);
    }

    return (
        <>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Bienvenue!</strong> Try playing with your text below.
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div className='container' style={{backgroundColor:props.mode==='light'?'white':'#46424f'}}>
        <h1 className={`my-4 text-${props.mode==='light'?'dark':'light'}`} htmlFor="heading">{props.heading}</h1>
        <div className="mb-4">   
            <textarea style={{backgroundColor:props.mode==='light'?'white':'#2d2a33'}}  className={`form-control text-${props.mode==='light'?'dark':'light'}`} id="inputtxt" rows="8" onChange={onChange} value={text}/>
        </div>
        
        <button disabled={text.length===0} onClick={toUpper} className="btn btn-primary mx-2">Upper Case</button>
        <button disabled={text.length===0} onClick={toLower} className="btn btn-primary">Lower Case</button>
        <div className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h2 >Summary</h2>
            <p>{text.split(/\s+/).filter((e)=> {return e.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((e)=> {return e.length!==0}).length } minutes read</p>

            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something to preview here'}</p>
        </div>
        
        </div>

      </>
  
    )
}


