import data from './data.json';

export const getData = () =>
	new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve(data);
		}, 300);
	});
