import "./App.css";
import Titulo from "./components/Titulo";
import { useState,useEffect } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [mensaje,setMensaje] = useState("mensaje por defecto") //hook
  const [count, setCount] = useState(0);
  //funciones de js

  useEffect(()=>{
    console.log("count")
  },[])

  useEffect(()=>{
    console.log(count)
  },[count])

  return (

      <ProductList/>

  );
}

export default App;
