import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
					/>
					<meta name="theme-color" content="#673ab7" />
					<link rel="manifest" href="static/manifest.json" />
					<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400" rel="stylesheet"/>
					<title>Todo App</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
				<style global jsx>{`
      body{
      	font-family: 'Montserrat', sans-serif;
      	margin: 0;
      	// padding: 5rem 5rem 0 5rem;
      	}
    `}</style>
			</html>
		);
	}
}
