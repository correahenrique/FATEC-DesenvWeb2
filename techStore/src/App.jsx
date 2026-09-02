import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <ProductCard
        nome="Notebook pro"
        categoria="Notebooks"
        descricao="Notebook para estudos e trabalhos."
        preco="3.499,99"
        imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sVX-RaZ-OcoXXzRkPqVUVs5aYsrKYb4a8H9dpQfcsg&s=10"
      />
      {products.map(product => (
        <ProductCard
          key={product.id}
          nome={product.nome}
          categoria={product.categoria}
          preco={product.preco}
          imagem={product.imagem}
        />

      ))}
    </div>

  )
}



export default App;