import './productCard.css'
function ProductCard({image,price,title,description}){
    return(
        <div >
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>{price}</h2>
        </div>
    )
}

export default ProductCard