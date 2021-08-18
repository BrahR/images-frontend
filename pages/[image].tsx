import Images from 'next/image';
import styles from '../styles/Home.module.css';
import fetch from 'node-fetch';
const ImagePage = ({ imageUrl, found }: any) => {
	return (
		<div className={styles.container}>
			{/* <Head>
				<title>{`${name || 'Tricked has images'}`}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="he uploads them on this website" />
				<meta property="theme-color" content={color} />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={imageUrl} />
				<meta property="og:image" content={imageUrl} />
			</Head> */}
			<style jsx global>{`
				html,
				body {
					background: radial-gradient(
						ellipse at bottom,
						#0d1d31 0%,
						#0c0d13 100%
					);
				}
			`}</style>
			{!found ? (
				<main className={styles.main}>
					<img
						src={imageUrl}
						alt=""
						className={styles.cardImage}
						onClick={() => window.open(imageUrl)}
					/>
				</main>
			) : (
				'IMAGE NOT FOUND'
			)}

			<footer className={styles.footer}>
				<a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
					Powered by{' '}
					<span className={styles.logo}>
						<Images
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
};
ImagePage.getInitialProps = async ({ query: { image } }: { query: any }) => {
	const imageUrl = `${
		process.env.BACKENDURL || 'http://localhost:3000'
	}/view/${image}`;
	const e = await fetch(imageUrl);

	// const res = await fetch(imageUrl);
	// res.headers.get("")
	// console.log(await res.text());
	// const img = await res.buffer().then((r) => r.toString('base64'));
	// const colors = [
	// 	'#0FF1CE',
	// 	'#FF0000',
	// 	'#8A2BE2',
	// 	'#00CED1',
	// 	'#088DA5',
	// 	'#aa250a',
	// ];

	return { imageUrl: imageUrl, found: e.status == 404 };
};
export default ImagePage;
