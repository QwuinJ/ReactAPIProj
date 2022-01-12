export const signUpFetch = async (username, email, password) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username,
				email,
				password,
			}),
		});
		const data = await response.json();
		return data;
	} catch (e) {
		console.log(e);
	}
};

export const picGetter = async () => {
	try {
		const response = await fetch('https://picsum.photos/v2/list', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		console.log(response);
		const info = await response.json();
		console.log(info);
		return info;
	} catch (err) {
		console.log(err);
	}
};
