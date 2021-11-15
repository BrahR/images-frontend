import { respond } from './_respond';

export async function post(request) {
	let r = await fetch('https://ascella.wtf/images/verify', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			id: parseInt(request.body.id),
			key: request.body.key
		})
	});
	let json = await r.json();

	return respond({ ...json });
}
