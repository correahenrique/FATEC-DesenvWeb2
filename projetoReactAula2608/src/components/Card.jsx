function Card(props) {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.descricao}</p>
            <img src={props.imagem} alt="Imagem linda" />
        </div>
    );
};

export default Card;