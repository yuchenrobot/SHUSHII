import {useState} from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';


function App() {
  const [accounts, setCurrentAccount]=useState([]);
  const [getNetwork, setCorrectNetwork]=useState(false);


  return (
    <div>
  
        <div className="App">
          <NavBar accounts={accounts} setCurrentAccount={setCurrentAccount}
           getNetwork={getNetwork} setCorrectNetwork={setCorrectNetwork}/>
          <MainMint accounts={accounts} setCurrentAccount={setCurrentAccount}
           getNetwork={getNetwork} setCorrectNetwork={setCorrectNetwork}/>
       
        </div>
        <div className='moving-background'></div>
      
        </div>
  );
}

export default App;
