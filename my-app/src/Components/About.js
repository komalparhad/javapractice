import React from 'react'

export default function About(props) {

    //  const [mystyle, setmyStyle] = useState(
    // {
    //     color:'black',
    //     backgroundColor:'white'
    // })

    let mystyle={
        color:props.mode ==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'? 'gray':'white',
        // border:'2px solid',
        // borderColor:props.mode==='dark'?'white':'black'
    }
//     const [btntext, setBtnText] = useState("Enable dark mode");

//    const toggleStyle=()=>{
//         if(mystyle.color==='black')
//         {
//             setmyStyle({
//                 color:'white',
//                 backgroundColor:'black',
//                 border:'1px solid gray'

//             })
//             setBtnText("Enable light mode");
//         }
//             else{
//                 setmyStyle({
//                     color:'black',
//                     backgroundColor:'white'
//                 })
//                 setBtnText("Enable Dark mode");
//             }
//     }
  return (
            <div className="container" style={mystyle} >
                <h2 className="my-3" style={{color:props.mode ==='dark'?'white':'black'}}>About US</h2>
            <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={mystyle}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong> Item #1</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Item #2</strong> 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        
        </div>
        </div>
        )
        }
