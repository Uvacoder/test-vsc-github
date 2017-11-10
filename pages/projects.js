import 'isomorphic-fetch';
import React from 'react';
import Head from 'next/head'
import withRedux from 'next-redux-wrapper';
import initStore from '../utils/store';
import ReactCursorPosition from 'react-cursor-position';
import ProjectsHero from '../components/ProjectsHero';
import Project from '../components/projects/Project';

class Projects extends React.Component {


	static getInitialProps(p) {
		return {
			projects: p.store.getState().projects
		};
	}


	render() {

		const projects = this.props.projects;

		return (
			<div className="experience">
				<Head>
					<title>Side Projects - Vishwas Singh Chouhan</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				</Head>

				<ReactCursorPosition>
					<ProjectsHero/>
				</ReactCursorPosition>

				<div className="project-wrap">
					{
						projects.list.map( (details, projectKey)=>{
							return <Project key={projectKey} details={details}/>
						})
					}
				</div>

				<div className="more">
					For more checkout out my <a href="https://github.com/vsc-github">github</a> or  <a href="https://codepen.io/vici0us/">codepen</a>.
				</div>

				<style jsx>{`
					.project-wrap{
								width: 82%;
							  display: flex;
								flex-wrap: wrap;
								flex-direction: row;
								margin: 0 auto;
					}
					.more{
						width: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						padding: 3rem 0;
					}
					.more a{
						margin: 0 .5rem
						color: #404084;
					}
				`}</style>
			</div>
		);
	}
}

export default withRedux(initStore)(Projects);
