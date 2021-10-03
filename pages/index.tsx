import React from "react";
import Head from "next/head";
import TopNav from "../components/topnav";
import { Box, Text, Image, SimpleGrid, GridItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from "@chakra-ui/react";
const features = [
	{
		title: "Easily change your settings",
		description: "You can change everything via Discord,\nmaking it the perfect image uploader for people who don't want to visit a confusing or cluttered site to just change some settings.",
		image: "/embeds.png",
	},
	{
		title: "Changing domains",
		description: "You can easily change your domain from inside Discord with a single slash command.",
		image: "/domains.png",
	},
	{
		title: "What are you waiting for?",
		description: "Start now by joining the Discord, asking for a code and redeeming it! It's that simple.",
		image: "/redeem.png",
	},
];
export default function Home() {
	function makeCard(name: string, content: string, img: string) {
		const { isOpen, onOpen, onClose } = useDisclosure();

		return (
			<>
				<Modal size="6xl" isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>{name}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							{content}
							<Image src={img} title={name} height="auto" width="100%" objectFit="cover" />
						</ModalBody>

						<ModalFooter>
							<Button colorScheme="blue" mr={3} onClick={onClose}>
								Close
							</Button>
							{/* <Button variant="ghost">Secondary Action</Button> */}
						</ModalFooter>
					</ModalContent>
				</Modal>
				<GridItem
					cursor="pointer"
					// as={motion.div}
					// whileHover={{
					// 	scale: 1.1,
					// }}
					// transition={{ duration: 0.4 }}
					maxW="35rem"
					minH="22rem"
					bg="current"
					border="md"
					rounded="md"
					borderColor="current"
					padding="10px"
					onClick={onOpen}
				>
					<Box width="100%" height="100%">
						<Box>
							<Image src={img} title={name} height="10rem" width="100%" objectFit="cover" />
						</Box>

						<Box>
							<Box color="CaptionText">
								<Text variant="h5" fontSize="lg">
									{name}
								</Text>
								<Text variant="body2" color="textSecondary">
									{content}
								</Text>
							</Box>
						</Box>
					</Box>
				</GridItem>
			</>
		);
	}

	return (
		<>
			<TopNav />

			<Box>
				<header>
					<div>
						<Text as="h1" fontSize="5xl">
							Welcome to&nbsp;<a href="https://discord.gg/KkMKCchJb8">Sogga Images!</a>
						</Text>
					</div>
					<div>
						<Text as="h1" fontSize="2xl">
							Get started by joining <a href="https://discord.gg/mY8zTARu4g">the Discord server</a> and pinging tricked to get access
						</Text>
					</div>
				</header>
				<Box>
					<SimpleGrid alignContent="center" alignItems="center" justifyItems="center" paddingTop="4rem" paddingBottom="6rem" gridGap="3rem" minChildWidth="15rem">
						{features.map((x) => makeCard(x.title, x.description, x.image))}
					</SimpleGrid>
				</Box>
			</Box>

			<Head>
				<title>Sogga Image Uploader</title>
				<meta name="description" content="An image uploader made to be quick" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</>
	);
}
