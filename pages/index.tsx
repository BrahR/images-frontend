import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import TopNav from "../components/topnav";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	image: {
		width: "100%",
		height: "8rem",
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	rooters: {
		maxWidth: 400,
	},
	padded: {
		padding: "1rem 1rem 1rem 1rem",
	},
}));

//Code stalker note feel free to suggest new features
const features = [
	{
		title: "Easily change your settings",
		description: "You can do change everything via discord,\nmaking it the perfect image uploader for people who dont want to visit a whole new site to just chane some settings",
		image: "/embeds.png",
	},
	{
		title: "Changing domains",
		description: "You can easily change your domain from inside discord with just 1 slash command,",
		image: "/domains.png",
	},
	{
		title: "So what are you waiting for",
		description: "Start now! by joining the discord, asking for a code and redeeming it its that simple!",
		image: "/redeem.png",
	},
];
export default function Home() {
	const classes = useStyles();

	function makeCard(name: string, content: string, img: string) {
		return (
			<Card className={styles.Cards}>
				<CardContent>
					<img src={img} title={name} className={classes.image} />
				</CardContent>

				<CardActionArea>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{name}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{content}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		);
	}

	return (
		<>
			<TopNav />

			<Paper>
				<header>
					<div>
						<h1 className={styles.HomeTitle}>
							Welcome to&nbsp;<a href="https://discord.gg/KkMKCchJb8">Sogga images!</a>
						</h1>
					</div>
					<div className={styles.HomeDescription}>
						<p>
							Get started by joining <a href="ttps://discord.gg/mY8zTARu4g">The Discord server</a> and pinging tricked to get access
						</p>
					</div>
				</header>
				<div className={styles.Container}>
					<div className={styles.CardHolder}>
						<div className={styles.HomeCards}>{features.map((x) => makeCard(x.title, x.description, x.image))}</div>
					</div>
				</div>
			</Paper>

			<Head>
				<title>Sogga Image Uploader</title>
				<meta name="description" content="A image uploader made to be quick" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</>
	);
}
