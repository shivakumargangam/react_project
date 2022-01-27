import react,{useState,useEffect} from "react";


function Contact (props){

    var [number,setNumber]=useState(0)
    const [toggle,setToggle]=useState(false)

    useEffect(()=>{
        return ()=>{
        console.log("component unmount")
        }
    },[]
    );



    return <>
    <h1>{props.title}</h1>
    { toggle &&
    <p>
        this content is hidden 
    </p>

    }

    <h1>{number}</h1>
    <button onClick={() => setNumber(number=number+1)}>increment</button>

    <button onClick={() => setToggle(!toggle)}>press</button>

        </>
}

export default Contact;