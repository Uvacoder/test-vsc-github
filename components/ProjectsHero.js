/**
 * Created by vishwas3 on 7/11/17.
 */

import React from 'react';

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
				<div className="spaceman" style={{transform: `translate3d(-${this.state.X}%, -${this.state.Y}%, 0)`}}>

				</div>


				<style jsx>{`

					.spaceman-wrap{
						background-color: #000;
						padding: 2rem 0 0 2rem;
					}

					.spaceman{
						color: white;
						width: 100%;
						height: 100vh;
						background-image: url(https://mashup-univers-ndudygickg.now.sh/assets/images/space.jpg);
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
