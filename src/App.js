import React, { useEffect, useState } from 'react';
import './App.css';
import PicBox from './components/PicBox';
import { picGetter, signUpFetch } from './utils';

const App = () => {
	const [pic, setPic] = useState([]);
	const [user, setUser] = useState();
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const picHandler = async () => {
		try {
			const result = await picGetter();
			console.log(result);
			setPic(result);
		} catch (err) {
			console.log(err);
		}
	};

	const signUpHandler = async (e) => {
		e.preventDefault();
		const returnValue = await signUpFetch(username, email, password);
		setUser(returnValue.username);
	};

	return (
		<div className='site-wrapper'>
			<div className='top-header'>
				<h1>InstaClone</h1>
				<h2>Welcome {user}</h2>
			</div>
			{!user ? (
				<form className='log-in-form' onSubmit={signUpHandler}>
					<input
						onChange={(e) => setUsername(e.target.value)}
						placeholder='Username'></input>
					<input
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Email'></input>
					<input
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Password'></input>
					<button type='submit'>Submit</button>
				</form>
			) : (
				<div className='main-content' onLoad={picHandler()}>
					<div className='left-col'>
						<p>Box one</p>
						<p>Box two</p>
						<p>Box three</p>
					</div>
					<div className='main-col'>
						{pic.map((p, index) => {
							return (
								<PicBox
									key={index}
									url={p.download_url}
									id={p.id}
									author={p.author}
								/>
							);
						})}
					</div>
					<div className='right-col'>
						<p>Box one</p>
						<p>Box two</p>
						<p>Box three</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
