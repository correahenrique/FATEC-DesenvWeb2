import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Perfil from './components/Perfil';

function App() {
  return (
    <div>
      <Header />
      <Card titulo="REACT" descricao="Biblioteca JavaScript para criar interfaces de usuário baseadas em componentes." />
      <Perfil nome="Henrique" profissao="QA" frase="Estudem JavaScript, por favor" />
      <Footer />
    </div>
  );
};

export default App;