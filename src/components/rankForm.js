import { useEffect, useState } from 'react'
import { viewcontent } from './Gallery'
import './w3style.css'
const RankForm = (props) => {
	const [matchData, setMatchData] = useState("")
	const [teamData, setTeamData] = useState("")
	const [resultBuf, setResultBuf] = useState("")
	const [scoreBuf, setScoreBuf] = useState([0,0,0,0,0])
	const [pointsBuf, setPointsBuf] = useState([0,0,0,0,0])


	useEffect(() => {
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
			setScoreBuf(sb)
			setPointsBuf(ps)
		})
		})	
	},[])

	useEffect(() => {
		viewcontent("teamName", (d) => {
			let data = JSON.parse(d)
			let tmpBuf = [...scoreBuf], tmpBuf2 = [...scoreBuf]
			tmpBuf.sort((a,b) => {
				if (a>b) return -1
				else return 1
			})
			console.log(scoreBuf)
			console.log(tmpBuf)
			let resBuf = []
			tmpBuf.forEach((n) => {
				const index = tmpBuf2.findIndex((e) => e === n)
				delete tmpBuf2[index]
				resBuf.push({"NO":index+1, "name":data["names"][index], "score":n, "points": pointsBuf[index]})
			})
			setResultBuf(resBuf)
		})
	}, [scoreBuf])

	function exch(buf, i, j) {
		const tmp = buf[i]
		buf[i] = buf[j]
		buf[j] = tmp
	}

	const checkZero = (e) => {
		if (e["points1"] === 0 && e["points2"] === 0) return true
		else return false
	}
	
	if (resultBuf === "") return <p>Loading</p>
	else return (
	<div className='w3-padding-64 w3-center'>
		<h2>Rank</h2>
			<div className='w3-container w3-responsive'>
				<table className='w3-table'>
						<tr>
							<th>No.</th>
							<th>Team Name</th>
							<th>Score</th>
							<th>Points</th>
						</tr>
						<tr className='w3-deep-orange'>
							<td>{resultBuf[0]["NO"]}</td>
							<td>{resultBuf[0]["name"]}</td>
							<td>{resultBuf[0]["score"]}</td>
							<td>{resultBuf[0]["points"]}</td>
						</tr>
						<tr className='w3-orange'>
							<td>{resultBuf[1]["NO"]}</td>
							<td>{resultBuf[1]["name"]}</td>
							<td>{resultBuf[1]["score"]}</td>
							<td>{resultBuf[1]["points"]}</td>
						</tr>
						<tr className='w3-amber'>
							<td>{resultBuf[2]["NO"]}</td>
							<td>{resultBuf[2]["name"]}</td>
							<td>{resultBuf[2]["score"]}</td>
							<td>{resultBuf[2]["points"]}</td>
						</tr>
						<tr className='w3-white'>
							<td>{resultBuf[3]["NO"]}</td>
							<td>{resultBuf[3]["name"]}</td>
							<td>{resultBuf[3]["score"]}</td>
							<td>{resultBuf[3]["points"]}</td>
						</tr>
						<tr className='w3-white'>
							<td>{resultBuf[4]["NO"]}</td>
							<td>{resultBuf[4]["name"]}</td>
							<td>{resultBuf[4]["score"]}</td>
							<td>{resultBuf[4]["points"]}</td>
						</tr>
				</table>
			</div>
		</div>
	)
}

export default RankForm;