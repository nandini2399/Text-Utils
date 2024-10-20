import React,{useState} from 'react'


export default function About(props){
    // const[aboutStyle,setStyle] = useState(
    //     {
    //     color:'black',
    //     backgroundColor:props.mode==='light'?'white':'#46424f'
    //     }
    // );

    let mystyle = {
        color : props.mode==='dark'?'white':'#46424f',
        backgroundColor : props.mode==='dark'?'#46424f':'white'
    }
    
    // const[mode,setMode] = useState('Enable Dark Mode');

    // const changeMode = () =>{
    //     if(aboutStyle.color==='white'){
    //         setStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         });

    //         setMode('Enable Dark Mode');
    //     }
    //     else{
    //         setStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         });

    //         setMode('Enable White Mode');
    //     }
        
    // }
   
    return (
        <>
        <div className='container my-3' style={mystyle}>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item"  style={mystyle}>
                <h2 className={`my-4 text-${props.mode==='light'?'dark':'light accordion-header'}`} id="headingOne">
                <button  style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className={`my-4 text-${props.mode==='light'?'dark':'light accordion-body'}`}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={mystyle}>
                <h2 className={`my-4 text-${props.mode==='light'?'dark':'light accordion-header'}`} id="headingTwo">
                <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className={`my-4 text-${props.mode==='light'?'dark':'light accordion-body'}`}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item"  style={mystyle}>
                <h2 className={`my-4 text-${props.mode==='light'?'dark':'light accordion-header'}`} id="headingThree">
                <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className={`my-4 text-${props.mode==='light'?'dark':'light accordion-body'}`}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>

           {/* <button onClick={changeMode} className="btn btn-primary my-2">{mode}</button> */}
        </div>
           
        </>
  );
}

