import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import { Link as ChakraLink, Button, Text } from "@chakra-ui/react";
interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

interface LinkTabProps {
	label?: string;
	href: string;
}

function LinkTab(props: LinkTabProps) {
	return (
		<Link href={props.href}>
			<ChakraLink>
				<Button minW="5rem" height="3rem" colorScheme="blue" borderRadius="0">
					<Box>
						<Text>{props.label}</Text>
					</Box>
				</Button>
			</ChakraLink>
		</Link>
	);
}

export default function NavTabs() {
	return (
		<Box>
			<ul>
				<LinkTab label="Main Page" href={"/"} />
				<LinkTab label="Docs" href={"/docs"} />
				<LinkTab label="Rules" href={"/docs/rules"} />
				<LinkTab label="privacy" href={"/docs/privacy"} />
			</ul>
		</Box>
	);
}
