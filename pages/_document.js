import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<title>Vishwas Singh Chouhan - Website & Blog</title>
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
					/>
					<meta name="theme-color" content="#673ab7" />
					<meta name="description" content="Vishwas is a software developer passionate about writing code, adventure travel and fitness. This is his website and blog."/>

					<meta property="og:site_name" content="Vishwas Singh Chouhan - Website & Blog"/>
					<meta property="og:title" content="Vishwas Singh Chouhan - Website & Blog"/>
					<meta property="og:description" content="Vishwas is a software developer passionate about writing code, adventure travel and fitness. This is his website and blog." />
					<meta property="og:image" content="http://vschouhan.me/static/img/website-preview.jpg"/>
					<meta property="og:url" content="http://vschouhan.me/"/>
					<meta property="og:type" content="website"/>
					<meta itemprop="name" content="Home"/>
					<meta itemprop="url" content="http://vschouhan.me/"/>
					<meta name="twitter:title" content="Vishwas Singh Chouhan - Website & Blog"/>
					<meta name="twitter:url" content="http://vschouhan.me/"/>
					<meta name="twitter:card" content="summary"/>
					<meta name="twitter:image" content="http://vschouhan.me/static/img/website-preview.jpg"/>
					<meta name="description" content="Vishwas is a software developer passionate about writing code, adventure travel and fitness. This is his website and blog." />
					<link rel="canonical" href="http://vschouhan.me/"/>
					<link rel="icon" type="image/x-icon" href="static/v.png"/>

					<link rel="manifest" href="static/manifest.json" />

					<style global jsx>{`
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
					<script type="application/javascript">
						var truepushSDK = document.createElement('script');
						truepushSDK.setAttribute('src','https://app.truepush.com/sdk/app.js?key=5c39d8765f3b6cacb34761b6&reload='+new Date().getTime());
						document.head.appendChild(truepushSDK);
					</script>
				</body>
			</html>
		);
	}
}
