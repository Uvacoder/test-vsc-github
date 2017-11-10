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
					<Project/>
					<Project/>
					<Project/>
				</div>

				<div className="project-wrap">
					<Project/>
					<Project/>
					<Project/>
				</div>

				<div className="project-wrap">
					<Project/>
					<Project/>
					<Project/>
				</div>

				<style jsx>{`
					.project-wrap{
						width: 80%;
						margin: 3rem auto;
						display: flex;
						justify-content: space-around;
					}
				`}</style>
			</div>
		);
	}
}

export default withRedux(initStore)(Projects);
