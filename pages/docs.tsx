import Router from "next/router";
import React, { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		const { pathname } = Router;
		if (pathname == "/docs") {
			Router.push("/docs/index");
		}
	});

	return <></>;
}
