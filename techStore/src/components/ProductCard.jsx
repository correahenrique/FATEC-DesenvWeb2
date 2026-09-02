function ProductCard(props) {
    return(
        <article className="product-card">
            <img src={props.imagem} alt={props.nome}/>
            <div className="product-info">
                <span>
                    {props.categoria}
                </span>
                <h3>{props.nome}</h3>
                <p>{props.descricao}</p>
                <strong>R${props.preco}</strong>
                <button>
                    Adicionar no carrinho
                </button>
            </div>
        </article>
    );
};

export default ProductCard;