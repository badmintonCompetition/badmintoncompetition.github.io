import "./w3style.css"
import p1 from './img/cup1_1.jpeg'
import p2 from './img/cup1_2.jpeg'
import p3 from './img/cup1_3.jpeg'
import p4 from './img/cup1_4.JPG'
import cup2_1 from './img/cup2_1.jpeg'
import cup2_2 from './img/cup2_2.jpeg'
import cup2_3 from './img/cup2_3.jpeg'

const Legends = (props) => {
	const handleReturn = () => {
		props.setCurrentForm(1);
	}
	return (
		<>
		<div className='w3-padding-16'>
			<button className="w3-button w3-teal w3-left" onClick={handleReturn}>Return</button>
		</div>
		<div className="w3-padding-64">
			<h2>第二届可乐杯优胜者</h2>
			<ul className="w3-ul">
				<li>王浩哲</li>
				<li>刘博文</li>
				<li>tibbit</li>
				<li>阿牧</li>
			</ul>
		</div>
		<div className="w3-row">
			<img src={cup2_1} style={{width:"100%"}}></img>
		</div>
		<div className="w3-row">
			<img src={cup2_2} style={{width:"100%"}}></img>
		</div>
		<div className="w3-row">
			<img src={cup2_3} style={{width:"100%"}}></img>
		</div>

		<div className="w3-padding-64">
			<h2>第一届可乐杯优胜者</h2>
			<ul className="w3-ul">
				<li>Umi</li>
				<li>田嘉禾</li>
				<li>Tony</li>
				<li>tibbit</li>
				<li>Mao</li>
				<li>可乐侠</li>
				<li>Ma</li>
				<li>刘博文</li>
				<li>阿雄</li>
				<li>kinou</li>
			</ul>
		</div>
		<div className="w3-row">
			<div className="w3-half">
				<img src={p1} style={{"width": "100%"}}></img>
			</div>
			<div className="w3-half">
				<img src={p2} style={{"width": "100%"}}></img>
			</div>
		</div>
		<div className="w3-row">
			<div className="w3-half">
				<img src={p3} style={{"width": "100%"}}></img>
			</div>
			{/* <div className="w3-half">
				<img src={p2} style={{"width": "100%"}}></img>
			</div> */}
		</div>
		<div className="w3-row">
			<img src={p4} style={{"width": "100%"}}></img>
		</div>
		</>
	)
}
export default Legends;