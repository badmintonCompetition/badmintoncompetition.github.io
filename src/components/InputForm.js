import { useState } from 'react'
import './w3style.css'

const InputForm = (props) => {
	const [turn, setTurn] = useState('');
	const [team1, setTeam1] = useState('');
	const [team2, setTeam2] = useState('');
	const [score1, setScore1] = useState(0);
	const [score2, setScore2] = useState(0);

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
		alert("Not implelemted")
	}

	const handleReturn = () => {
		props.setCurrentForm(1);
	}

	return (
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
						<option value="solo">单</option>
						<option value="duo1">双1</option>
						<option value="duo2">双2</option>
					</select>
				</label>
				<label className='w3-padding-small'>队伍2:
					<select value={team2} onChange={handleTeam2Change}>
						<option value="solo">单</option>
						<option value="duo1">双1</option>
						<option value="duo2">双2</option>
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