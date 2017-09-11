import 'isomorphic-fetch';
import React from 'react';
import Head from 'next/head'

class Experience extends React.Component {
	render() {
		return (
			<div>
				<Head>
					<title>Professional Experience</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				This is my experience!
			</div>
		);
	}
}

export default Experience;
