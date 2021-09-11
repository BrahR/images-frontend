import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "next/link";
interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div role="tabpanel" hidden={value !== index} id={`nav-tabpanel-${index}`} aria-labelledby={`nav-tab-${index}`} {...other}>
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
		id: `nav-tab-${index}`,
		"aria-controls": `nav-tabpanel-${index}`,
	};
}

interface LinkTabProps {
	label?: string;
	href?: string;
}

function LinkTab(props: LinkTabProps) {
	return (
		<Tab
			component={"a"}
			// onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
			// 	// event.preventDefault();
			// }}
			{...props}
		/>
	);
}

export default function NavTabs({ active = 0, position, className }: any) {
	return (
		<AppBar position={position || "static"} className={className}>
			<Tabs variant="fullWidth" value={active} aria-label="nav tabs example">
				<LinkTab label="Main Page" href={"/"} />
				<LinkTab label="Docs" href={"/docs"} />
				<LinkTab label="Rules" href={"/docs/rules"} />
				<LinkTab label="privacy" href={"/docs/privacy"} />
			</Tabs>
		</AppBar>
	);
}
