import { useEffect, useState } from 'react';
import './commonStyles.css'
import { viewcontent } from './Gallery';
const RecordsForm = (props) => {
	const handleReturn = () => {
		props.setCurrentForm(1);
	}
	const [matchData, setMatchData] = useState("")
	const [teamData, setTeamData] = useState("")

	useEffect(() => {
		viewcontent("recordsForm",(d) => setMatchData(JSON.parse(d)))
		viewcontent("teamName", (d) => setTeamData(JSON.parse(d)))
	},[])

	return (
		<div>
			<div className='w3-padding-16'>
			<button className="w3-button w3-teal w3-left" onClick={handleReturn}>Return</button>
		</div>
			<div className='w3-padding-32'>
				<h2>Records Sheet</h2>
				<p>Game status: {(matchData === "") ? "Loading" : (matchData["started"] ? <span className='w3-green'>ON </span>: <span className='w3-red'>OFF</span>)}</p>
			</div>
			<div className='w3-container w3-responsive'>
				{(matchData === "" || teamData === "") ? <p>Loading</p> :
				<table className='w3-table'>
					<tr>
						<th>Team A</th>
						<th>Team B</th>
						<th>Type</th>
						<th>Score A</th>
						<th>Score B</th>
					</tr>
					{matchData["data"].map((e) => {
						return (
							<tr className='w3-white'>
								<td >{teamData['names'][e["team1"]-1] === "" ? e["team1"] : teamData['names'][e["team1"]-1]}</td>
								<td >{teamData['names'][e["team2"]-1] === "" ? e["team2"] : teamData['names'][e["team2"]-1]}</td>
								<td >{e["turn"]}</td>
								<td >{e["points1"]}</td>
								<td >{e["points2"]}</td>
							</tr>
						)
					})}
				</table>
}
			</div>
		</div>
	)
}
export default RecordsForm;