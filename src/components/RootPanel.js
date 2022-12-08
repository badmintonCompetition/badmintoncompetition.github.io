import { useState } from "react"
import './commonStyles.css'

const RootPanel = (props) => {
	const [cmd, setcmd] = useState('')
	const [retStr, setretStr] = useState('')
	const handleSubmit = (e) => {
		setretStr('Submithandled')
		e.preventDefault();
	}
	const handleChanged = (e) => {
		setcmd(e.target.value);
	}

	return (
		<div className="container">
		<form className="center" onSubmit={handleSubmit}>
			<label>CMD: </label>
			<input type="text"></input>
			<input type={"submit"} value="Submit"></input>
			<label>Return: </label>
			<label>{retStr}</label>
		</form>
		</div>
	)
}
export default RootPanel;