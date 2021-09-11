import { useEffect } from "react";
import { highlightAll } from "prismjs";
import { getDocBySlug, getDocs } from "../../api/index";
import Paper from "@material-ui/core/Paper";
import Head from "next/head";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TopNav from "../../components/topnav";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "next/link";
const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		media: {
			height: "260px",
		},
		card: {
			alignItems: "center",
			width: "100%",
			height: "100%",
		},
		grid: {
			padding: "4px 4px 4px",
		},
		root: {
			alignItems: "center",
			width: "80%",
			justify: "center",
			maxWidth: "90%",
			margin: "auto",
			padding: "2px 20px",
		},
		center: {
			display: "block",
			alignItems: "center",
			textAlign: "center",
		},
		drawerroot: {
			display: "flex",
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 4,
		},
		drawer: {
			maxWidth: "30vw",
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			maxWidth: "30vw",
			width: drawerWidth,
		},
		drawerContainer: {
			overflow: "auto",
			maxWidth: "30vw",
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
		docs: {
			"& a:link": {
				color: "rgba(255, 251, 0, 0.8)",
			},

			"& a:visited": {
				color: "green",
			},

			"& a:hover": {
				color: "#b7f4f8",
			},

			"& a:active": {
				color: "blue",
			},
		},
	})
);
function Cursed({ input }: any) {
	return <div dangerouslySetInnerHTML={{ __html: input }} />;
}
export default function Doc({ doc, docs }: any) {
	const classes = useStyles();
	useEffect(() => {
		if (typeof window !== "undefined") {
			highlightAll();
		}
	}, []);
	return (
		<div className={classes.drawerroot}>
			<CssBaseline />
			<Head>
				<title>{doc.title} | SoggaImages docs</title>
				<meta name="description" content={doc.description} />
			</Head>
			<TopNav active={doc.title == "rules" ? 2 : doc.title == "privacy" ? 3 : 1} position="fixed" className={classes.appBar} />

			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<Toolbar />
				<div className={classes.drawerContainer}>
					<List>
						{docs.map((text: any) => (
							<Link href={`${text.slug}`} key={text.title}>
								<ListItem button key={text}>
									<ListItemText primary={text.title || text.slug} />
								</ListItem>
							</Link>
						))}
					</List>
				</div>
			</Drawer>
			<main className={classes.content}>
				<Toolbar />
				<Typography paragraph className={classes["docs"]}>
					<Cursed input={doc.content} />
				</Typography>
			</main>
		</div>
	);
}

export async function getStaticProps(context: any) {
	let paths: any = await getDocs();

	return {
		props: {
			doc: await getDocBySlug(context.params.doc.join("/")),
			docs: paths,
		},
	};
}

export async function getStaticPaths() {
	let paths: any = await getDocs();
	paths = paths.map((doc: any) => ({
		params: { doc: doc.slug.split("/") },
	}));
	return {
		paths: paths,
		fallback: false,
	};
}
