const estilos = {
  titulo: {
    color: "red",
    backgroundColor: "white",
  },
  parrafo: {
    color: "yellow",
    backgroundColor: "black",
  },
};

function Titulo({ mensaje }) {

  return (
    <>
      <h1 style={estilos.titulo}>Titulo {mensaje}</h1>
      <p style={estilos.parrafo}>algo mas</p>
    </>
  );
}

export default Titulo;
