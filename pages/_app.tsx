import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function MyApp({ Component, pageProps }: AppProps) {
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

	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
export default MyApp;
