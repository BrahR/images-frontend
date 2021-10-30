export async function getImage(i: string): Promise<any> {
	return await fetch(`https://api.tricked.pro/images/stats/${i}`)
		.catch(() => undefined)
		.then((r) => r.json());
}
export async function getDomains(): Promise<any> {
	return await fetch(`https://api.tricked.pro/images/domains`)
		.catch(() => undefined)
		.then((r) => r.json());
}
export async function getPaste(i: string): Promise<any> {
	try {
		const r = await fetch(`https://api.tricked.pro/paste/${i}`);
		return await r.json();
	} catch {
		return undefined;
	}
}
