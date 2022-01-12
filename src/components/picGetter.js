import React from 'react';

const picGetter = async () => {
	const response = await fetch('https://picsum.photos/v2/list');
	const picArr = [];
	console.log(response);
};

picGetter();
