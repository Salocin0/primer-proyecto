import ProductList from "./ProductList"
function Card({children}){
    function aviso(){
        console.log("click a card generica")
    }

    function boton(e){
        e.stopPropagation()
        console.log("click al boton")
    }
    return <div onClick={aviso} style={{backgroundColor:"#fff"}}>
        {children}
        <button onClick={boton}>boton</button>
        </div>
}

export default Card