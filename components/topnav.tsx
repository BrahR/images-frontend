import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import { Link as ChakraLink, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

interface LinkTabProps {
	label?: string;
	href: string;
	pathName: string;
}

function LinkTab(props: LinkTabProps) {
	return (
		<Link href={props.href}>
			<ChakraLink>
				<Button minW="5rem" height="2.4rem" borderBottom="2px" borderBottomColor="blue" borderRadius="0" borderColor={props.pathName == props.href ? "green.500" : "GrayText"}>
					<Box>
						<Text>{props.label}</Text>
					</Box>
				</Button>
			</ChakraLink>
		</Link>
	);
}

export default function NavTabs() {
	let router = useRouter();
	//@ts-ignore =
	const path = router.query.doc ? `${router.pathname.replace("[...doc]", router.query.doc.join("/"))}` : router.pathname;

	return (
		<Box>
			<LinkTab label="Main Page" href={"/"} pathName={path} />
			<LinkTab label="Docs" href={"/docs"} pathName={path} />
			<LinkTab label="Rules" href={"/docs/rules"} pathName={path} />
			<LinkTab label="Privacy" href={"/docs/privacy"} pathName={path} />
		</Box>
	);
}
