function Titulo({mensaje}) {
  const estilos = {
    titulo: {
      color: "red",
      backgroundColor: "white",
    },
    parrafo:{
       color: "yellow",
      backgroundColor: "black", 
    }
  };

  return (
    <>
      <h1 style={estilos.titulo}>Titulo {mensaje}</h1>
      <p style={estilos.parrafo}>algo mas</p>
    </>
  );
}

export default Titulo;
