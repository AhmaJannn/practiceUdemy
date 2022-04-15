import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

const text = "Hello, world!!!";

//const elem = <h1>Hello, world!</h1>;
const elem = (
	<div>
		<h2 className='text'>Текст:{text}</h2>
		<label>
			<input type="text" />
			<button tabIndex="0" >Click me</button>
		</label>
		{/*<button />*/}
	</div>
);

//const elem = React.createElement('h2', {className: 'header__text'}, 'Hello, world!');

//const elem = {
//	type: 'h2',
//	props: {
//		className: 'header__text',
//		children: 'Hello, world!'
//	}
//};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	elem
);



