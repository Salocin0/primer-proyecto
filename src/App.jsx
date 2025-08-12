import "./App.css";
import Titulo from "./components/Titulo";
import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Card from "./components/card";
import Form from "./components/form";

function App() {
  const [mensaje, setMensaje] = useState("mensaje por defecto"); //hook
  const [count, setCount] = useState(0);
  //funciones de js

  useEffect(() => {
    console.log("count");
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <Form/>
      <Card>
        <h1>card 1</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          delectus nihil, quis ipsam illum voluptatibus enim fugit perspiciatis
        </p>
      </Card>
      <ProductList />
    </>
  );
}

export default App;
