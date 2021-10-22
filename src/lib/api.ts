export async function getImage(i: string): Promise<any> {
	return await fetch(`https://api.tricked.pro/images/stats/${i}`).then((r) => r.json());
}
