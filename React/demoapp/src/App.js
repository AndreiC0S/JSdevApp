import logo from './logo.svg';
import './App.css';
import Salut from './Components/Salut';
import Masina from './Components/Masina';
// import Form from './Components/Form';
import MyForm from './Components/MyForm';


 export default function App() {
  const carInfo = {nume:'Ford',model:'Mustang'}
  const obj = { name: 'Alice', email: 'demo@demo.com', password: '123456', car: 'Volvo', message: 'Salut!!!' };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Salut nume='Dan' curs='React'/>
        <Salut nume='Mihai' />
        <Masina car= {carInfo} />
        {/* <Form /> */}
        <MyForm {...obj}/>
      </header>
      
    </div>
  );
}


