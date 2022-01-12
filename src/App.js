import React, { useEffect, useState } from 'react';
import './App.css';
import PicBox from './components/PicBox';
import { picGetter } from './utils';

const App = () => {
	const [pic, setPic] = useState([]);

	const picHandler = async () => {
		try {
			const result = await picGetter();
			console.log(result);
			setPic(result);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='site-wrapper' onLoad={picHandler()}>
			<div className='top-header'>
				<h1>InstaClone</h1>
			</div>
			<div className='main-content'>
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
		</div>
	);
};

export default App;
