function Category(props) {
    return (
        <div className="category">
            <span>
                {props.icone}
            </span>
            <h3>{props.nome}</h3>
        </div>
    );
};

export default Category;