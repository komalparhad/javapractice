import logo from './logo.svg';
import './App.css';

const reactDescription=['Fundamental','Crucial','Core'];
function genRandom(max){

  return Math.floor(Math.random()*(max +1 ))
}

function App() {
  return (
    <div>
    <h1>Create React Application</h1>
    <p>
     {reactDescription[genRandom(2)]} React app is great concept
    </p>

    </div>
  );
}

export default App;
