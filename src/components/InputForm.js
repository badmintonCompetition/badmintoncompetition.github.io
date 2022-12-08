import { useState } from 'react'
import './commonStyles.css'

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
	}

	const handleReturn = () => {
		props.setCurrentForm(1);
	}

	return (
		<>
		<button onClick={handleReturn}>Return</button>
		<form className='center' onSubmit={handleSubmit}>
			<label>场次:
				<select value={turn} onChange={handleTurnChange}>
					<option value="solo">单</option>
					<option value="duo1">双1</option>
					<option value="duo2">双2</option>
				</select>
			</label>
			<label>队伍1:
				<select value={team1} onChange={handleTeam1Change}>
					<option value="solo">单</option>
					<option value="duo1">双1</option>
					<option value="duo2">双2</option>
				</select>
			</label>
			<label>队伍2:
				<select value={team2} onChange={handleTeam2Change}>
					<option value="solo">单</option>
					<option value="duo1">双1</option>
					<option value="duo2">双2</option>
				</select>
			</label>
			<label>队伍1分数:
				<input type="text" value={score1} onChange={handleScore1Change}></input>
			</label>
			<label>队伍2分数:
				<input type="text" value={score2} onChange={handleScore2Change}></input>
			</label>
			<input type="submit" value="提交"></input>
		</form>
		</>
	)
}
export default InputForm;