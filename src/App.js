import React, { useEffect, useState } from 'react';
import './App.css';
import { Login } from './components/login';

const App = () => {
	const [user, setUser] = useState();
	const [username, setUsername] = useState();
	const [arr, setArr] = useState(['Sarah', 'Gina', 'Katie', 'Harriet']);

	useEffect(() => {
		fetchReq();
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		setUsername(user);
	};

	const fetchReq = async () => {
		for (let i = 0; i < 20; i++) {
			const tempArray = arr;
			tempArray.push('https://picsum.photos/200');
		}
	};

	return (
		<div className='App'>
			<h1>{user}</h1>
			{username ? <h1>Welcome {username}</h1> : <h1>Please Log In</h1>}
			{username && <h2>Success</h2>}
			<Login setter={setUser} handler={submitHandler} />
			{arr.map((item, i) => {
				return (
					<div>
						<p key={i}>{item}</p>;
						<img src='https://picsum.photos/200' alt='random' />
					</div>
				);
			})}
		</div>
	);
};

export default App;
