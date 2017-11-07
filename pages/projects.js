import 'isomorphic-fetch';
import React from 'react';
import Head from 'next/head'
import TypedBio from '../components/TypedBio';

class Projects extends React.Component {

	constructor() {
		super();
	}

	componentDidMount() {
		this.setState({

		});
	}

	render() {
		return (
			<div className="experience">
				<Head>
					<title>Side Projects - Vishwas Singh Chouhan</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				</Head>

				<TypedBio
					strings={[
						'Some <i>strings</i> are slanted',
						'Some <strong>strings</strong> are bold',
						'HTML characters &times; &copy;'
					]}
				/>

				<style jsx>{`

				`}</style>
			</div>
		);
	}
}

export default Projects;
