import Head from "next/head";
import styles from "../styles/Home.module.css";
export default function Home() {
	return (
		<div className={styles.troocked}>
			<Head>
				<title>Sogga Image Uploader</title>
				<meta name="description" content="A image uploader made to be quick" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<div>
					<h1 className={styles.HomeTitle}>
						Welcome to&nbsp;<a href="https://discord.gg/KkMKCchJb8">Sogga images!</a>
					</h1>
				</div>
				<div className={styles.HomeDescription}>
					<p>
						Get started by joining <a href="ttps://discord.gg/mY8zTARu4g">The Discord server</a> and pining tricked to get access
					</p>
				</div>
			</header>

			<div className={styles.Container}>
				<div className={styles.CardHolder}>
					<div className={styles.HomeCards}>
						{makeCard(
							"Easily change your settings",
							"You can do change everything via discord,\nmaking it the perfect image uploader for people who dont want to visit a whole new site to just chane some settings",
							"/embeds.png"
						)}
						{makeCard("Changing domains", "You can easily change your domain from inside discord with just 1 slash command,", "/domains.png")}
						{makeCard("So what are you waiting for", "Start now! by joining the discord, asking for a code and redeeming it its that simple!", "/redeem.png")}


					</div>
				</div>
			</div>

			{/* <footer className={styles.footer}>
				<a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer> */}
		</div>
	);
}
function makeCard(name: string, content: string, img: string) {
	return (
		<div className={styles.Cards}>
			<div className={styles.CardPicture}>
				<a href={img}>
					<img
						className={styles.tsxBalding}
						src={img}
						alt={img}
					/>
				</a>
			</div>
			<div className={styles.CardDescription}>
				<a href={img}>
					<h2>{name}</h2>
				</a>
				<p>{content}</p>
			</div>
		</div>
	);
}
