function Perfil(props) {
    return (
        <div>
            <h2>{props.nome}</h2>
            <h2>{props.profissao}</h2>
            <h2>{props.frase}</h2>
        </div>
    );
};

export default Perfil;