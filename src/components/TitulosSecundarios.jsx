const TitulosSecundarios = (props) => {
  return(<>
<h2>Titulo generado con props de la comision: {props.comision}</h2>
<p>Año actual: {props.anioActualProps}</p>
</>
  );
};

export default TitulosSecundarios;
