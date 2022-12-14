import { useState } from "react"
import { editContent, resetForm, resetNames, viewcontent } from "./Gallery"
import './w3style.css'

const RootPanel = (props) => {
	const [cmd, setcmd] = useState('')
	const [retStr, setretStr] = useState('')
	const handleSubmit = (e) => {
		// setretStr('Submithandled')
		e.preventDefault();
		// Parse cmd
		if (cmd.search("test") === 0) {
			if (cmd.includes("connection")) {
				viewcontent("tmp2", setretStr)
			}
			else if (cmd.includes("write")) {
				const strArray = cmd.split(" ")
				if (strArray.length === 2) {
					editContent("tmp2", "test write")
					return
				}
				editContent("tmp2", strArray[2])
			}
			else if (cmd.includes("reset")) {
				resetForm()
				viewcontent("recordsForm", setretStr)
			}
		}
		else if (cmd.search("get") === 0) {
			const cmdArray = cmd.split(" ")
			viewcontent(cmdArray[1], setretStr)
		}
		else if (cmd.search("start") === 0) {
			if (cmd.search("match") !== -1) {
				let data = ""
				viewcontent("recordsForm", (d) => {
					data = JSON.parse(d)
					data["started"] = true
					editContent("recordsForm", JSON.stringify(data))
				})
			}
		}
		else if (cmd.search("end") === 0) {
			if (cmd.search("match") !== -1) {
				let data = ""
				viewcontent("recordsForm", (d) => {
					data = JSON.parse(d)
					data["started"] = false
					editContent("recordsForm", JSON.stringify(data))
				})
			}
		}
		else if (cmd.search("set") === 0)
		{
			if (cmd.includes("name")) {
				let data = ""
				const cmdArray = cmd.split(" ")
				console.log(cmdArray)
				// The right method the use viewcontent is to put all ops into the function pointer
			 	viewcontent("teamName", (d) => {
					data = JSON.parse(d)
					data["names"][parseInt(cmdArray[2])-1] = cmdArray[3]
					editContent("teamName", JSON.stringify(data))
				})
			}
		}
		else if (cmd.search("reset") === 0) {
			if (cmd.includes("records")) {
				resetForm()
			}
			else if (cmd.includes("names")) {
				resetNames()
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