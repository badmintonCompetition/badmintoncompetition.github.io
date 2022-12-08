import './commonStyles.css'
const RecordsForm = (props) => {
	const handleReturn = () => {
		props.setCurrentForm(1);
	}
	return (
		<div className='center'>
			<button onClick={handleReturn}>Return</button>
			<p> records here</p>
		</div>
	)
}
export default RecordsForm;