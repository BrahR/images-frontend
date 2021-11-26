export async function getImage(i: string): Promise<any> {
	return await fetch(`https://ascella.wtf/v2/ascella/view/${i}/stats`)
		.catch(() => undefined)
		.then((r) => r.json());
}
export async function getDomains(): Promise<any> {
	return await fetch(`https://ascella.wtf/v2/ascella/domains`)
		.catch(() => undefined)
		.then((r) => r.json());
}
export async function getPaste(i: string): Promise<any> {
	try {
		const r = await fetch(`https://ascella.wtf/paste/${i}`);
		return await r.json();
	} catch {
		return undefined;
	}
}
