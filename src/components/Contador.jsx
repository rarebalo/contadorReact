import { useState } from "react";

const Contador = () => {
    const[numero, setNumero] = useState(1);
    return(
        <section className="text-center">
            <h3>Contador</h3>
            <p>{numero}</p>
            <button className="btn btn-primary" onClick={()=>setNumero(numero+1)}>+1</button>
        </section>
    )
}

export default Contador;