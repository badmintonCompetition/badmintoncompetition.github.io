import { useEffect, useState } from 'react'
import { updateForm, viewcontent } from './Gallery';
import './w3style.css'

const InputForm = (props) => {
	const [turn, setTurn] = useState('');
	const [team1, setTeam1] = useState('');
	const [team2, setTeam2] = useState('');
	const [score1, setScore1] = useState(0);
	const [score2, setScore2] = useState(0);
	const [teamData, setTeamData] = useState("");
	const [nameData, setNameData] = useState([]);
	const [loaded, setLoaded] = useState(false)

	const handleTurnChange = (e) => {
		setTurn(e.target.value)
	}
	
	const handleTeam1Change = (e) => {
		setTeam1(e.target.value)
	}

	const handleTeam2Change = (e) => {
		setTeam2(e.target.value)
	}

	const handleScore1Change = (e) => {
		setScore1(e.target.value);
	}

	const handleScore2Change = (e) => {
		setScore2(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		let newEntry = {"team1": parseInt(team1), "team2": parseInt(team2), "turn": turn, "points1": parseInt(score1), "points2": parseInt(score2)}
		console.log("new entry:")
		console.log(newEntry)
		if (updateForm(newEntry) === -1)
		{
			alert("Game not started")
			return
		}

	}

	const handleReturn = () => {
		props.setCurrentForm(1);
	}

	useEffect(() => {
		// viewcontent("recordsForm", (d) => setTeamData(JSON.parse(d)))
		viewcontent("teamName", (d) => {
			let data = JSON.parse(d)
			let tmp = []
			data["names"].forEach((element, i) => {
				tmp.push({"i":i, "element":(element === "" ? i+1 : element)})
			})
			setNameData(tmp)
			setTeam1(1)
			setTeam2(1)
			setLoaded(true)
		})
	}, [])

	if (loaded === false) return <p>Loading</p>
	else return (
		<>
		<div className='w3-padding-16'>
			<button className="w3-button w3-teal w3-left" onClick={handleReturn}>Return</button>
		</div>
		<div className='w3-padding-64'>
			<h2>Submit Results Here</h2>
		</div>
		<form className='w3-container w3-card w3-padding-32 w3-dark-grey' style={{fontSize:"1.5em"}} onSubmit={handleSubmit}>
			<div className='w3-section'>
				<label className='w3-padding-small'>场次:
					<select value={turn} onChange={handleTurnChange}>
						<option value="solo">单</option>
						<option value="duo1">双1</option>
						<option value="duo2">双2</option>
					</select>
				</label>
				<br/>
				<label className='w3-padding-small'>队伍1:
					<select value={team1} onChange={handleTeam1Change}>
						{nameData.map((e) => <option  value={e["i"]+1}>{e["element"]}</option>)}
					</select>
				</label>
				<label className='w3-padding-small'>队伍2:
					<select value={team2} onChange={handleTeam2Change}>
						{nameData.map((e) => <option  value={e["i"]+1}>{e["element"]}</option>)}
					</select>
				</label>
			</div>
			<div className='w3-section'>
				<label className='w3-left'>队伍1分数:
				</label>
				<input className='w3-input' type="text" value={score1} onChange={handleScore1Change}></input>
				<label className='w3-left'>队伍2分数:
				</label>
				<input className='w3-input' type="text" value={score2} onChange={handleScore2Change}></input>
			</div>
		<input className="w3-button w3-right w3-teal" type="submit" value="提交"></input>
		</form>
		</>
	)
}
export default InputForm;