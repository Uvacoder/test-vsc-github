import 'isomorphic-fetch';
import React from 'react';
import Head from 'next/head'
import Rellax from 'rellax';

class Experience extends React.Component {

	constructor(){
		super();
	}

	componentDidMount(){
		this.setState({
			rellax: new Rellax('.rellax')
		});
	}

	render() {
		return (
			<div className="experience">
				<Head>
					<title>Professional Experience</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				experiment

				<div className="rellax land" data-rellax-speed=".2"></div>
				<div className="rellax hills" data-rellax-speed=".1"></div>
				<div className="rellax mountains" data-rellax-speed=".05"></div>

				<style jsx>{`
					.experience{
					height: 6000px;
					}
					.land{
						height: 400px;
						width: 100%;
						position: fixed;
						top: 530px;
						background-image: url(/static/img/experience/land.png);
						background-repeat: repeat-x;
						z-index: 50;
					}
					.hills{
						height: 700px;
						width: 100%;
						position: fixed;
						top: 230px;
						background-image: url(/static/img/experience/hills.png);
						background-repeat: repeat-x;
						z-index: 40;
					}
					.mountains{
						height: 700px;
						width: 100%;
						position: fixed;
						top: 100px;
						background-image: url(/static/img/experience/mountains.png);
						background-repeat: repeat-x;
						z-index: 30;
					}
				`}</style>
			</div>
		);
	}
}

export default Experience;
