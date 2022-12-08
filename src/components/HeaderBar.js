import './HeaderBar.css';

const HeaderBar = () => {
	return <header className="App-header">
        <div class="dropdown">
          <button class="dropbtn">☰</button>
          <div class="dropdown-content">
            <button>button 1</button>
            <button>button 2</button>
            <button>button 3</button>
          </div>
        </div>
        <p className='app-header-title'>
          Something about me!
        </p>
      </header>
}
export default HeaderBar;