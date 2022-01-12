import React, { useEffect, useState } from 'react';
import './App.css';
import { Login } from './components/login';
import { signUpFetch } from './utils';

const App = () => {
	const [user, setUser] = useState();
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const signUpHandler = (e) => {
		e.preventDefault();
		const returnValue = signUpFetch(username, email, password);
		console.log(returnValue);
	};

	return (
		<div className='App'>
			<h1>{user}</h1>
			{user ? (
				<form onSubmit={signUpHandler}>
					<input
						onChange={(e) => setUsername(e.target.value)}
						placeholder='Username'
					/>
					<input
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Email'
					/>
					<input
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Password'
					/>
					<button type='submit'>Submit</button>
				</form>
			) : (
				<h2>You are not logged in</h2>
			)}
		</div>
	);
};

export default App;
