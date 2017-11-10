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

				<style jsx>{`
					.project-wrap{
								width: 82%;
							  display: flex;
								flex-wrap: wrap;
								flex-direction: row;
								margin: 0 auto;
					}
				`}</style>
			</div>
		);
	}
}

export default withRedux(initStore)(Projects);
