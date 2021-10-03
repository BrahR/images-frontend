import { useEffect } from "react";
import { getDocBySlug, getDocs } from "../../api/index";
import { useRouter } from "next/router";
import Head from "next/head";
import TopNav from "../../components/topnav";
import { Button, Text, Flex, Box, SimpleGrid, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";

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

export default function Doc({ doc, docs }: any) {
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>{doc.title} | SoggaImages docs</title>
				<meta name="description" content={doc.description} />
			</Head>
			<TopNav />

			<Flex padding="10px" shrink={0} overflowX="scroll" width="100vw" spacing="1rem">
				<Box width="10rem" marginRight="1rem">
					<SimpleGrid>
						{docs.map((text: any, y: any) => (
							<Link href={`${text.slug}`} key={y} paddingBottom="10px">
								<Button width="10rem" borderRight="4px" borderRightColor={text.slug == (router.query.doc as unknown as string[])?.join("/") ? "blue.800" : "darkred"}>
									<Text>{text.title || text.slug}</Text>
								</Button>
							</Link>
						))}
					</SimpleGrid>
				</Box>

				<main>
					<Text overflowWrap={"break-word"} fontSize="larger">
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
