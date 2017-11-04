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

					<style global jsx>{`
							body{
								font-family: 'Montserrat', sans-serif;
								margin: 0;
							}
							::-webkit-scrollbar {
								width: 6px;
								background-color: rgba(0,0,0,0);
								-webkit-border-radius: 100px;
							}
							::-webkit-scrollbar:hover {
								background-color: rgba(0, 0, 0, 0.09);
							}
							::-webkit-scrollbar-thumb:vertical {
								background: rgba(0,0,0,0.5);
								-webkit-border-radius: 100px;
							}
							::-webkit-scrollbar-thumb:vertical:active {
								background: rgba(0,0,0,0.61);
								-webkit-border-radius: 100px;
							}
    				`}
    			</style>

				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
