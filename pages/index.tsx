import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'


const components = { typo: Typography }


interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: any) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

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
		padding: "1rem 1rem 1rem 1rem"
	}
}));


//Code stalker note feel free to suggest new features
const features = [
	{
		title: "Easily change your settings",
		description: "You can do change everything via discord,\nmaking it the perfect image uploader for people who dont want to visit a whole new site to just chane some settings",
		image: "/embeds.png"
	},
	{
		title: "Changing domains",
		description: "You can easily change your domain from inside discord with just 1 slash command,",
		image: "/domains.png"

	},
	{
		title: "So what are you waiting for",
		description: "Start now! by joining the discord, asking for a code and redeeming it its that simple!",
		image: "/redeem.png"
	}
]
export default function Home({ rules, privacy, faq }: any) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					type: prefersDarkMode ? "dark" : "light",
				},
			}),
		[prefersDarkMode]
	);

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
		<ThemeProvider theme={theme}>
			<div className={styles.troocked}>
				<div className={classes.root}>
					<AppBar position="static">
						<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
							<Tab label="Features" {...a11yProps(0)} />
							<Tab label="Rules" {...a11yProps(1)} />
							<Tab label="Privacy" {...a11yProps(2)} />
							<Tab label="Faq" {...a11yProps(3)} />
						</Tabs>
					</AppBar>
					<TabPanel value={value} index={0}>
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
									<div className={styles.HomeCards}>
										{features.map(x => makeCard(x.title, x.description, x.image)

										)}
									</div>
								</div>
							</div>
						</Paper>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Paper className={classes.padded}>
							<Typography paragraph={true} noWrap>
								<MDXRemote {...rules} components={components} />
							</Typography>
						</Paper>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<Paper className={classes.padded}>
							<Typography paragraph={true} noWrap>
								<MDXRemote {...privacy} components={components} />
							</Typography>
						</Paper>
					</TabPanel>
					<TabPanel value={value} index={3}>
						<Paper className={classes.padded}>
							<Typography paragraph={true} noWrap>
								<MDXRemote {...faq} components={components} />
							</Typography>
						</Paper>
					</TabPanel>
				</div>
				<Head>
					<title>Sogga Image Uploader</title>
					<meta name="description" content="A image uploader made to be quick" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
			</div>
		</ThemeProvider>
	);
}

export async function getStaticProps() {
	// MDX text - can be from a local file, database, anywhere
	const rules = `
	Sogga images has the following rules

	Upload rules
		- No form of porn is allowed
		- Dont spam uploads
		- Uploading malware is not allowed
	`;
	const mdxSource = await serialize(rules);
	const privacyPolicy = `
	What data do we save: 
	    - All images uploaded are saved supabase
		- You account is stored on supabase
		- Other than that no information is collected
	
	How can i request data deletion: 
		- You need to dm tricked#3777 on discord
		- or send a emailt to trickedcodes@tutanota.com

	How can i contact you for privacy concerns
		- You need to dm tricked#3777 on discord
		- or send a emailt to trickedcodes@tutanota.com

	`
	const privacy = await serialize(privacyPolicy);
	const FAQ = `
			
		How can i use this image uploader
			- Windows
				- Install sharex https://getsharex.com/
				- Download your config /profile in the discord
				- Open the .sxcu file
				- Select sogga images as image uploader
				- Adjust the keybinds as needed

			- Linux
				- Download sharenix https://github.com/Francesco149/sharenix
				- Update the imgur.com uploader to use the sogga images 
				- And change the request url to the one in /profile
				- Change the "URL" to "URL": "$json:url$"
				- Adjust the keybinds as needed

			- MacOs
				- Switch to linux its better
		
		How can i add my domain
			- You need to dm tricked#3777 and then you can choose what subdomain you want to give
			
		How do i get a invite code
			- You can ask tricked for a invite
			- Get a invite from a friend :D
			- Discord https://discord.gg/KkMKCchJb8
		
		Whats your infrastructure
			- The images are stored in supabase storage and your accounts are stored in supabase postgressql
			- This site is hosted by vercel.
			- The backend is hosted by heroku or onrender
			- This website is made using nextjs
			- The backend is made using fastify, the bot is made using fastify too and is hosted on the same project
			- If you have any idea how to improve on this in a "free" way feel free to dm me

			`
	const faq = await serialize(FAQ);
	console.log(faq)
	return { props: { rules: mdxSource, privacy: privacy, faq: faq } };
}
