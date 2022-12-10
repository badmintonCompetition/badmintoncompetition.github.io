import './w3style.css'
const RankForm = (props) => {
	return (
	<div className='w3-padding-64 w3-center'>
		<h2>Rank</h2>
			<div className='w3-container w3-responsive'>
				<table className='w3-table'>
						<tr>
							<th>No.</th>
							<th>Team Name</th>
							<th>W/D</th>
							<th>Score</th>
						</tr>
						<tr className='w3-deep-orange'>
							<td>1</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr className='w3-orange'>
							<td>2</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr className='w3-amber'>
							<td>3</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr className='w3-white'>
							<td>4</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr className='w3-white'>
							<td>5</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
				</table>
			</div>
		</div>
	)
}

export default RankForm;