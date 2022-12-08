import './commonStyles.css'

const LoginForm = (props) => {

	const Root = 0, Login = 1, Input = 2, Statistics = 3;
	const handleRootBtn = () => {
		props.setCurrentForm(Root)
	}
	const handleInputBtn = () => {
		props.setCurrentForm(Input)
	}
	const handleRecordsBtn = () => {
		props.setCurrentForm(Statistics)
	}
	return (
	<div className='container'>
		<div className='center'>
			<button onClick={handleRootBtn}>Root</button>
			<button onClick={handleInputBtn}>Input</button>
			<button onClick={handleRecordsBtn}>Records</button>
		</div>
	</div>
	)
}

export default LoginForm;