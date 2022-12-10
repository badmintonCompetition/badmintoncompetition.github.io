import './w3style.css'

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
		<>
			<div className='w3-padding-64'>
				<h1>Main Menu</h1>
			</div>
			<div className='w3-padding-64' style={{fontSize:"1.2em"}}>
				<button className='w3-button w3-black w3-block w3-hover-teal w3-padding-16' onClick={handleInputBtn}>Input</button>
				<button className='w3-button w3-black w3-block w3-hover-dark-grey w3-padding-16' onClick={handleRecordsBtn}>Records</button>
			</div>
			<div className='w3-padding-64'>
				<button className='w3-button w3-black w3-block w3-hover-white w3-padding-16' onClick={handleRootBtn}>Root</button>
			</div>
		</>
	)
}

export default LoginForm;