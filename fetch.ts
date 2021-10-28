import { doomFetch } from 'https://deno.land/x/doomfetch@1.0.0/mod.ts';

// const res = await doomFetch('https://api.tricked.pro/images/verify', 'POST')
// 	// .headers({
// 	// 	'x-user-id': '0',
// 	// 	'x-user-token': 'tricked',
// 	// })
// 	// .file(Deno.readFileSync('Cargo.toml'), 'image')
// 	.body(
// 		JSON.stringify({
// 			id: 0,
// 			key: 'tricked',
// 			// image_id: 10
// 		}),
// 		'json'
// 	)
// 	.send('json');
// console.log(res.body);
await doomFetch('https://api.tricked.pro/paste', 'POST')
	.body(
		{
			content: 'test'
		},
		'json'
	)
	.send('json')
	.then(console.log);
