import Images from "next/image";
import Head from "next/head";
import fetch from "node-fetch";
import { Image, Text, Box, SimpleGrid } from "@chakra-ui/react";
const ImagePage = ({ imageUrl, found, data }: any) => {
	return (
		<Box>
			<Box>
				<Head>
					{found ? (
						""
					) : !data.embed ? (
						<meta property="og:url" content={imageUrl} />
					) : (
						<>
							{data.embed.title ? <title>{data.embed.title}</title> : ""}
							{data.embed.url ? <meta name="og:url" content={data.embed.url} /> : ""}
							{data.embed.description ? <meta name="description" content={data.embed.description} /> : ""}
							{data.embed.color ? <meta property="theme-color" content={data.embed.color} /> : ""}
						</>
					)}

					<meta property="twitter:card" content="summary_large_image" />
					<link rel="icon" href="/favicon.ico" />

					<meta property="og:image" content={imageUrl} />
				</Head>

				{!found ? (
					<Box bgGradient="linear(to-r, green.200, pink.500)" height="100vh" fontWeight="bold">
						<SimpleGrid justifyItems="center">
							<Text fontSize="3xl">
								Captured by {`${data.user.name}`} amount of {`${data.user.name}`} images: {`${data.user.uploads}`}
							</Text>
						</SimpleGrid>
						<SimpleGrid justifyItems="center">
							<Image maxW="80rem" maxH="80rem" height="auto" width="auto" src={imageUrl} alt="" onClick={() => window.open(imageUrl)} />
						</SimpleGrid>
					</Box>
				) : (
					"IMAGE NOT FOUND"
				)}
			</Box>
		</Box>
	);
};
ImagePage.getInitialProps = async ({ res, req, query: { image } }: any) => {
	const imageUrl = `${process.env.BACKENDURL || "https://api.tricked.pro/images"}/view/${image[image.length - 1]}`;
	const e = await fetch(imageUrl + "/stats");
	let data = await e.json();
	if (data?.redirect) {
		res.writeHead(308, { Location: data.redirect });
		res.end();
		return {
			fount: false,
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
	return { imageUrl: imageUrl, found: e.status == 404, data: data };
};
export default ImagePage;
