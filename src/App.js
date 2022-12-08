import './App.css';
import LoginForm from './components/LoginForm';
import InputForm from './components/InputForm';
import RecordsForm from './components/RecordsForm';
import HeaderBar from './components/HeaderBar';
import Gallery from './components/Gallery';
import { useState } from 'react';
import RootForm from './components/RootFrom';

function App() {
  const Root = 0, Login = 1, Input = 2, Statistics = 3;
  const [currentForm, setCurrentForm] = useState(1);
  
  return (
    <div className="App">
      {currentForm === Login ? <LoginForm setCurrentForm={setCurrentForm}/> :
      (currentForm === Root ? <RootForm setCurrentForm={setCurrentForm}/> : 
      (currentForm === Input ? <InputForm setCurrentForm={setCurrentForm}/> : 
      (currentForm === Statistics ? <RecordsForm setCurrentForm={setCurrentForm}/> : <LoginForm setCurrentForm={setCurrentForm}/>)))}
    </div>
  );
}

export default App;
