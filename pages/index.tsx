import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Sogga Image Uploader</title>
				<meta name="description" content="A image uploader made to be quick" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to&nbsp;<a href="https://discord.gg/KkMKCchJb8">Sogga images!</a>
				</h1>
				<p className={styles.description}>
					Get started by joining&nbsp;<a href="https://discord.gg/mY8zTARu4g">the discord</a>&nbsp;and pinging tricked to get access
				</p>
				<div className={styles.description}>
					{makeCard(
						"Easily change your settings",
						"You can do change everything via discord,\nmaking it the perfect image uploader for people who dont want to visit a whole new site to just chane some settings",
						"https://sogga.herokuapp.com/view/a73a4"
					)}
					{makeCard("Changing domains", "You can easily change your domain from inside discord with just 1 slash command,", "https://sogga.herokuapp.com/view/09946")}
					{makeCard("So what are you waiting for", "Start now! by joining the discord, asking for a code and redeeming it its that simple!", "https://sogga.herokuapp.com/view/6344a")}
				</div>
			</main>

			<footer className={styles.footer}>
				<a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
function makeCard(name: string, content: string, img: string) {
	return (
		<div className={styles.item}>
			<Card  >
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
