import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);
    function adicionarContador() {
        setContador(contador + 1);
        console.log(contador);
    };
    function diminuitContador() {
        setContador(contador - 1);
        console.log(contador);
    };
    return (
        <div>
            <h2>{contador}</h2>
            <button onClick={adicionarContador}>
                Adicionar
            </button>
            <button onClick={diminuitContador}>
                Reduzir
            </button>
            <button onClick={() => setContador(0)}>
                Zerar
            </button>
        </div>
    );
};

export default Contador;