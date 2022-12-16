import './App.css';
import './components/w3style.css'
import LoginForm from './components/LoginForm';
import InputForm from './components/InputForm';
import RecordsForm from './components/RecordsForm';
import { useState } from 'react';
import RootForm from './components/RootFrom';
import RankForm from './components/rankForm';
import Legends from './components/Legends';

function App() {
  const [isFinal, setIsFinal] = useState(false)
  const Root = 0, Login = 1, Input = 2, Statistics = 3, Legend = 4;
  const [currentForm, setCurrentForm] = useState(1);
  
  return (
    <div className='w3-content'>
		  <div className='w3-half w3-black w3-container w3-center' style={{minHeight:'800px'}}>
      {currentForm === Login ? <LoginForm setCurrentForm={setCurrentForm}/> :
      (currentForm === Root ? <RootForm setCurrentForm={setCurrentForm} isFinal={isFinal} setIsFinal={setIsFinal}/> : 
      (currentForm === Input ? <InputForm setCurrentForm={setCurrentForm} isFinal={isFinal}/> : 
      (currentForm === Statistics ? <RecordsForm setCurrentForm={setCurrentForm}/> : 
      (currentForm === Legend ? <Legends setCurrentForm={setCurrentForm}/> : <LoginForm setCurrentForm={setCurrentForm}/>))))}
      </div>
      <div className='w3-half w3-indigo w3-container' style={{minHeight:'800px'}}>
        <RankForm/>
		  </div>
      <footer class="w3-container w3-black w3-padding-top-32">
        <p>Powered by <span className='w3-text-cyan'>React</span>, <span className='w3-text-teal'>Github Page</span>, and <span className='w3-text-orange'>AWS S3</span></p>
        <p>Created by <a href={"https://yifeijing.github.io/"} className='w3-text-purple'>rvalue</a> --- yifei.j@ik.me</p>
      </footer>
    </div>
  );
}

export default App;