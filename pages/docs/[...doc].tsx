import { useEffect } from "react";
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
// import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Link from "next/link";
const drawerWidth = 240;
import { Link as ChakraLink, Button, Text, Flex, Box, SimpleGrid } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import { Link, ListItem, UnorderedList } from "@chakra-ui/react";

const components = {
	ul: UnorderedList,
	li: ListItem,
	p: Text,
	code: ({ children, className }: any) => {
		return <code>{children}</code>;
	},
	a: ({ children, href }: any) => {
		return (
			<Link color="green.300" href={href}>
				<Text as="u">{children}</Text>
			</Link>
		);
	},
	h4: ({ children }: any) => {
		return (
			<Text variant={"h4"} fontSize="large">
				{children}
			</Text>
		);
	},
	h3: ({ children }: any) => {
		return (
			<Text variant={"h3"} fontSize="x-large">
				{children}
			</Text>
		);
	},
	h2: ({ children }: any) => {
		return (
			<Text variant={"h2"} fontSize="2xl">
				{children}
			</Text>
		);
	},
	h1: ({ children }: any) => {
		return (
			<Text variant={"h1"} fontSize="3xl">
				{children}
			</Text>
		);
	},
};
const Markdown = ({ content }: any) => {
	return (
		<>
			<head>
				<link href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`} rel="stylesheet" />
			</head>
			<MDXRemote {...content} components={components} />
		</>
	);
};

function Cursed({ input }: any) {
	return <div dangerouslySetInnerHTML={{ __html: input }} />;
}
export default function Doc({ doc, docs }: any) {
	return (
		<div>
			<Head>
				<title>{doc.title} | SoggaImages docs</title>
				<meta name="description" content={doc.description} />
			</Head>
			<TopNav />
			<Flex padding="10px" shrink={0} overflowX="scroll" width="100vw">
				<Box width="10rem">
					<SimpleGrid>
						{docs.map((text: any, y: any) => (
							<Link href={`${text.slug}`} key={y} paddingBottom="10px">
								<Button overflowWrap={"break-word"} width="10rem">
									<Text overflowWrap={"break-word"}>{text.title || text.slug}</Text>
								</Button>
							</Link>
						))}
					</SimpleGrid>
				</Box>

				<main>
					<Text paddingLeft="1rem" overflowWrap={"break-word"} fontSize="larger">
						<Markdown content={doc.content} />
					</Text>
				</main>
			</Flex>
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
