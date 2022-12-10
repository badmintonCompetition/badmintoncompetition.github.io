import { useState } from 'react';
import RootPanel from './RootPanel';
import './w3style.css'

const RootForm = (props) => {
	const [inputstr, setinputstr] = useState('');
	const pass = 'qwer1234'
	const [passed, setpassed] = useState(false);

	const handleInputChange = (e) => {
		setinputstr(e.target.value)
	}

	const handleSubmit = (e) => {
		if (inputstr === pass) {
			console.log("Right pass")
			setpassed(true)
		}
		else console.log("Wrong pass")
		e.preventDefault();
	}

	const handleReturnBtn = () => {
		setpassed(false)
		props.setCurrentForm(1)
	}

	return (
		<>
		<button onClick={handleReturnBtn}>Return</button>
		{passed ? <RootPanel/> : 
		<div className='w3-container'>
			<form className='w3-padding-64' onSubmit={handleSubmit}>
				<label className='w3-left'>Password:</label>
				<input className='w3-input' type={"password"} value={inputstr} onChange={handleInputChange}></input>
				<input className='w3-button w3-teal' type={"submit"} value="Submit"></input>
			</form>
		</div>
		}
		</>
	)
}
export default RootForm;