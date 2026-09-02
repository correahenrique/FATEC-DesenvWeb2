import { useState } from "react";

function CampoTexto() {
    const [nome, setNome] = useState("");
    const [lista, setLista] = useState([]);

    function handleChange(event) {
        setNome(event.target.value);
    };
    function adicionarNome() {
        if (nome.trim() === "")
            return;
        setLista([...lista, nome]);
        setNome("");
    };

    return (
        <div>
            <input type="text" placeholder="Digite o seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <button onClick={adicionarNome}>
                Enviar
            </button>
            <ul>
                {lista.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
            <p>Você digitou: {nome}</p>
        </div>
    );
};

export default CampoTexto;