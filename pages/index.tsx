import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
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
						<div className={styles.Cards}>
							<div className={styles.CardPicture}>
								<a href="Link xd">
									<img
										className={styles.tsxBalding}
										src="https://cdn.discordapp.com/attachments/707382625718763580/880013110214295552/m5Lmxrk.jpg"
										alt="tricked i am pretty sure you will read this, alt means alternative so if the picture didn't show aka the server died this text will replace it, i didn't try putting a link here but i am 99% it will also work"
									/>
								</a>
							</div>
							<div className={styles.CardDescription}>
								<a href="Also Link">
									<h2>Easily change your settings</h2>
								</a>
								<p>You can do change everything via discord, making it the perfect image uploader for people who dont want to visit a whole new site to just chane some settings</p>
							</div>
						</div>
						<div className={styles.Cards}>
							<div className={styles.CardPicture}>
								<a href="Link xd">
									<img
										className={styles.tsxBalding}
										src="https://cdn.discordapp.com/attachments/707382625718763580/880013110214295552/m5Lmxrk.jpg"
										alt="tricked i am pretty sure you will read this, alt means alternative so if the picture didn't show aka the server died this text will replace it, i didn't try putting a link here but i am 99% it will also work"
									/>
								</a>
							</div>
							<div className={styles.CardDescription}>
								<a href="Also Link">
									<h2>Changing domains</h2>
								</a>
								<p>You can easily change your domain from inside discord with just 1 slash command,</p>
							</div>
						</div>
						<div className={styles.Cards}>
							<div className={styles.CardPicture}>
								<a href="Link xd">
									<img
										className={styles.tsxBalding}
										src="https://cdn.discordapp.com/attachments/707382625718763580/880013110214295552/m5Lmxrk.jpg"
										alt="tricked i am pretty sure you will read this, alt means alternative so if the picture didn't show aka the server died this text will replace it, i didn't try putting a link here but i am 99% it will also work"
									/>
								</a>
							</div>
							<div className={styles.CardDescription}>
								<a href="Also Link">
									<h2>So what are you waiting for</h2>
								</a>
								<p>Start now! by joining the discord, asking for a code and redeeming it its that simple!</p>
							</div>
						</div>
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
		<div className={styles.item}>
			<Card>
				<CardActionArea>
					<CardMedia className={styles.image} image={img} title="Contemplative Reptile" />
					<CardContent className={styles.cardbody}>
						<Typography gutterBottom variant="h5" component="h2">
							{name}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{content}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
}
