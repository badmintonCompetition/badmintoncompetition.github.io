import './App.css';
import './components/w3style.css'
import LoginForm from './components/LoginForm';
import InputForm from './components/InputForm';
import RecordsForm from './components/RecordsForm';
import { useState } from 'react';
import RootForm from './components/RootFrom';
import RankForm from './components/rankForm';

function App() {
  const Root = 0, Login = 1, Input = 2, Statistics = 3;
  const [currentForm, setCurrentForm] = useState(1);
  
  return (
    <div className='w3-content'>
		  <div className='w3-half w3-black w3-container w3-center' style={{minHeight:'800px'}}>
      {currentForm === Login ? <LoginForm setCurrentForm={setCurrentForm}/> :
      (currentForm === Root ? <RootForm setCurrentForm={setCurrentForm}/> : 
      (currentForm === Input ? <InputForm setCurrentForm={setCurrentForm}/> : 
      (currentForm === Statistics ? <RecordsForm setCurrentForm={setCurrentForm}/> : <LoginForm setCurrentForm={setCurrentForm}/>)))}
      </div>
      <div className='w3-half w3-indigo w3-container' style={{minHeight:'800px'}}>
        <RankForm/>
		  </div>
      <footer class="w3-container w3-black w3-padding-16">
        <p>Made by <a href="https://yifeijing.github.com" target="_blank">rvalue</a></p>
      </footer>
    </div>
  );
}

export default App;
