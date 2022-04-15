import {Component} from 'react';
import './App.css';

const Header = () => {
	return <h2>Hello, world!</h2>
}

//const Field = () => {
//	const holder = 'Enter here';
//	const styleField = {
//		width: '300px',
//	};
//	return <input 
//				placeholder={holder} 
//				type="text" 
//				style={styleField}
//			/>
//}

class Field extends Component {
	render() {
		const holder = 'Enter here';
		const styleField = {
			width: '300px',
		};
		return <input 
					placeholder={holder} 
					type="text" 
					style={styleField}
				/>
	}
}

function Btn() {
	const text = 'Log in';
	//const res = () => {
	//	return 'Log in';
	//};
	const logged = true;
	//const p = <p>Log in</p>
	return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
		 <Header/>
		 <Field/>
		 <Btn/>
		 <h1>Hello world what u doing frined</h1>
		 <h2>Hello world what u doing  in small letters</h2>
		 <h2>Hello world what u doing  in small letters</h2>
    </div>
  );
}

export {Header};
export default App;
