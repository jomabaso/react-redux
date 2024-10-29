import './App.css';
import LandingPage from './pages/LandingPage';

function Person(props) {
  return (
    <div className='person'>
      <h3>nombre: {props.nombre}</h3>
      <p>edad: {props.edad}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
        <LandingPage />
    </div>
  );
}

export default App;
