import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchBack() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProductos(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchBack();
  }, []);

  /*if(loading){
        return (<p>
            Cargando...
        </p>)
    }

    return(
        <div>
        {
        productos.map((producto)=>(
            <ProductCard key={producto.id} {...producto}/>
        ))    
        }
        </div>
    )*/

  return(
        <div>
            {
              loading && <p>Cargando... </p>
            }
            { !loading && productos.map((producto)=>(
                <ProductCard key={producto.id} {...producto}/>
            ))    
            }
        </div>
    )
/*
  return (
    <div>
      {loading ? (
        <p>Cargando... </p>
      ) : (
        productos.map((producto) => (
          <ProductCard key={producto.id} {...producto} />
        ))
      )}
    </div>
  );*/
}

// id uuid 
export default ProductList;
