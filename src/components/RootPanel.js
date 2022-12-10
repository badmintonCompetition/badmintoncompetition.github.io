import { useState } from "react"
import { viewcontent } from "./Gallery"
import './w3style.css'

const RootPanel = (props) => {
	const [cmd, setcmd] = useState('')
	const [retStr, setretStr] = useState('')
	const handleSubmit = (e) => {
		// setretStr('Submithandled')
		e.preventDefault();
		// Parse cmd
		if (cmd.includes("test")) {
			if (cmd.includes("connection")) {
				viewcontent("tmp2", setretStr)
			}
		}
	}
	const handleChanged = (e) => {
		setcmd(e.target.value);
	}

	return (
		<div className="w3-container">
		<form className="w3-padding-64" onSubmit={handleSubmit}>
			<div className="w3-container">
			<label className="w3-left">CMD: </label>
			<input className="w3-input" onChange={handleChanged} value={cmd} type="text"></input>
			<input className="w3-button w3-teal" type={"submit"} value="Submit"></input>
			</div>
			<label className="w3-left">Return: </label>
			<label className="w3-right">{retStr}</label>
		</form>
		</div>
	)
}
export default RootPanel;