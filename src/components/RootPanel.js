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
			else if (cmd.includes("final")) {
				const cmdArray = cmd.split(" ")
				viewcontent("recordsForm",(d) => {
					let ds = JSON.parse(d)
					let sb = [0,0,0,0,0], ps = [0,0,0,0,0]
					console.log(ds["data"])
					ds["data"].forEach((e) => {
					if (checkZero(e) === false) {
						if (e["points1"] > e["points2"]) sb[e["team1"]-1]++
						else sb[e["team2"]-1]++
						ps[e["team1"]-1] += e["points1"]	
						ps[e["team2"]-1] += e["points2"]	
					}
					})
					let tmpBuf = [...sb], tmpBuf2 = [...sb]
					tmpBuf.sort((a,b) => {
						if (a>b) return -1
						else return 1
					})
					let resBuf = []
					tmpBuf.forEach((n) => {
						let index = tmpBuf2.findIndex((e) => e ===n)
						let index_same = 0
						if ((index_same = findSame(tmpBuf2, tmpBuf2[index], index)) !== -1) {
							let maxPointsIndex = index
							for (let j = 0; j < tmpBuf2.length; j++) {
								if (tmpBuf2[j] === undefined) continue
								if (tmpBuf2[index] === tmpBuf2[j] && ps[j] > ps[maxPointsIndex]) maxPointsIndex = j
							}
							index = maxPointsIndex
						}
						delete tmpBuf2[index]
						resBuf.push(index+1)
					})
					// BackUp
					editContent("recordsForm_backup", d)
					// Make the new template json
					const template = {
						"started":false,
						"data": []
					}
					const count = parseInt(cmdArray[2])
					for (let index = 0; index < count; index++) {
						for (let j = index+1; j < count; j++) {
							template["data"].push({"team1":resBuf[index], "team2": resBuf[j], "turn":"solo", "points1":0, "points2":0})
							template["data"].push({"team1":resBuf[index], "team2": resBuf[j], "turn":"duo1", "points1":0, "points2":0})
							template["data"].push({"team1":resBuf[index], "team2": resBuf[j], "turn":"duo2", "points1":0, "points2":0})
						}
					}
					console.log(template)
					editContent("recordsForm", JSON.stringify(template))
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
	const checkZero = (e) => {
		if (e["points1"] === 0 && e["points2"] === 0) return true
		else return false
	}
	function findSame(buf, element, i) {
		for(let index = 0; index < buf.length; index++) {
			if (index === i) continue
			if (element === buf[index]) return index
		}
		return -1
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