/**
 * Created by vishwas3 on 7/11/17.
 */

import React from 'react';
import TypedBio from '../components/TypedBio';

class ProjectsHero extends React.Component {

	constructor() {
		super();
		this.state = {
			X: 0,
			Y: 0
		}
	}

	componentWillReceiveProps(newProps) {
		const X = newProps.position.x / (newProps.elementDimensions.width / 5);
		const Y = newProps.position.y / (newProps.elementDimensions.height / 5);
		this.setState((state) => {
			return {X, Y}
		});
	}

	render() {

		return (
			<div className="spaceman-wrap">
				<TypedBio
					strings={[
						'Hello, I\'m <b>Vishwas</b>.',
						'These are some projects I built.',
						'When I was <strong><i>bored</i></strong>',
						'When I was <strong><i>not working</i></strong>',
						'When I was <strong><i>pretty stoned</i></strong>',
						'Take a look, fellow earthling!',
					]}
				/>
				<div className="spaceman" style={{transform: `translate3d(-${this.state.X}%, -${this.state.Y}%, 0)`}}>

				</div>


				<style jsx>{`

					.spaceman-wrap{
						background-color: #000;
						padding: 2rem 0 0 2rem;
						margin: 0 0 8rem 0;
						position: relative;
					}

					.spaceman{
						color: white;
						width: 100%;
						height: 100vh;
						background-image: url(static/img/projects/astronaut.jpg);
				    background-size: cover;
						background-repeat: no-repeat;
						background-position: top;
					}
				`}</style>

			</div>
		);
	}
}

export default ProjectsHero;
