import Images from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import fetch from "node-fetch";
const ImagePage = ({ imageUrl, found, data }: any) => {
	return (
		<div className={styles.coolbackground}>
			<div className={styles.container}>
				<Head>
					{found ? (
						""
					) : !data.embed ? (
						<meta property="og:url" content={imageUrl} />
					) : (
						<>
							{data.embed.title ? <title>{data.embed.title}</title> : ""}
							{data.embed.url ? <meta name="og:url" content={data.embed.url} /> : ""}
							{data.embed.description ? <meta name="description" content={data.embed.description} /> : ""}
							{data.embed.color ? <meta property="theme-color" content={data.embed.color} /> : ""}
						</>
					)}
					{/* <title>{`${name || 'Tricked has images'}`}</title> */}
					{/* <meta name="description" content="he uploads them on this website" /> */}
					{/* <meta property="theme-color" content={color} /> */}
					{/* <meta property="og:type" content="website" /> */}
					<meta property="twitter:card" content="summary_large_image" />
					<link rel="icon" href="/favicon.ico" />

					<meta property="og:image" content={imageUrl} />
				</Head>
				<style jsx global>{`
					html,
					body {
						// background: radial-gradient(
						// 	ellipse at center,
						// 	#1d3e66 0%,
						// 	#203956 20%,
						// 	#0d1d31 30%,
						// 	#191e3a 50%,
						// 	#10142b 75%,
						// 	#0c0d13 100%
						// );
					}
					main {
						text-align: center;
					}
				`}</style>
				{!found ? (
					<main>
						<h2>
							Captured by {`${data.user.name}`} amount of {`${data.user.name}`} images: {`${data.user.uploads}`}
						</h2>
						<img src={imageUrl} alt="" className={styles.image} onClick={() => window.open(imageUrl)} />
					</main>
				) : (
					"IMAGE NOT FOUND"
				)}

				<footer className={styles.footer}>
					<a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
						Powered by{" "}
						<span className={styles.logo}>
							<Images src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
						</span>
					</a>
				</footer>
			</div>
		</div>
	);
};
ImagePage.getInitialProps = async ({ query: { image } }: { query: any }) => {
	const imageUrl = `${process.env.BACKENDURL || "https://sogga.herokuapp.com"}/view/${image}`;
	const e = await fetch(imageUrl + "/stats");
	return { imageUrl: imageUrl, found: e.status == 404, data: await e.json() };
};
export default ImagePage;
