import './productCard.css'
function ProductCard({image,price,title,description,setCount}){
    //use state

    //funciones

    //useeffect

    //estilos

    //funcion para ver detalle

    return(
        <div >
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>{price}</h2>
            <button onClick={()=> setCount("hola")}>comprar</button>
            {/*precio estilado*/}
        </div>
    )
}

export default ProductCard