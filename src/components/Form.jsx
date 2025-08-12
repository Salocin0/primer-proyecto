import { useEffect, useState } from "react"

function Form(){
    const [nombre,setNombre] = useState("")
    
    useEffect(()=>{
        console.log(nombre)
    },[nombre])
    function enviar(e){
        e.preventDefault()
        console.log("enviado")
    }

    return <form onSubmit={enviar}>
        <label>Nombre</label>
        <input type="text" style={{color:"white"}} onChange={(e)=> setNombre(e.target.value)}/>
        <button type="submit" style={{color:"white"}}>Enviar</button>
    </form>
}

export default Form