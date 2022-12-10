import './commonStyles.css'
const RecordsForm = (props) => {
	const handleReturn = () => {
		props.setCurrentForm(1);
	}
	return (
		<div>
			<div className='w3-padding-16'>
			<button className="w3-button w3-teal w3-left" onClick={handleReturn}>Return</button>
		</div>
			<p> records here</p>
		</div>
	)
}
export default RecordsForm;