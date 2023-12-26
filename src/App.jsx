import "bootstrap/dist/css/bootstrap.min.css";
import TitulosSecundarios from "./components/TitulosSecundarios";

function App() {

  const anioActual = new Date();
  return (
    <section className="container my-4">
      <h1 className="text-center  display-3">
        {}
        Contador
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos est
        natus repellat veniam sit, atque expedita aliquam ipsam voluptatum
        exercitationem aperiam quasi. Officiis nobis molestias labore neque
        corporis harum debitis!
      </p>
      <TitulosSecundarios comision='c75i' anioActualProps={anioActual.getFullYear()}></TitulosSecundarios>
    </section>
  );
}

export default App;
