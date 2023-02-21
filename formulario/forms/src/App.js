
import './App.css';
import Composicao from './components/Composicao';
import Formulario from './components/Formulario';

function App() {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Formulário</h1>
     <Formulario user={{name: "julia", email: "prof@gmail.com", idade: "22"}}/>
     <Composicao>
      <p style={{textAlign: 'center'}}>outro texto</p>
      <p style={{textAlign: 'center'}}>outro texto</p>
      <p style={{textAlign: 'center'}}>outro texto</p>
     </Composicao>
    </div>
  );
}

export default App;
