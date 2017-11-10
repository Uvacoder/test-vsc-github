/**
 * Created by vishwas3 on 12/9/17.
 */

import React from 'react'

export const Project = ({ details }) => (

	<div className="project">
		<div className="wheel" >
			<span className="mask"></span>
			<span className="project-img"
						style={{ backgroundImage : 'url('+details.imageUrl+')' }}
			></span>
		</div>
			<div className="title">{ details.title }</div>
			<div className="description">
				{ details.description }
			</div>
			<div className="links">
				<a href="" title="github">
					<img src="static/img/projects/github-project.png" alt="github"/>
				</a>
				<a href="" title="live">
					<img src="static/img/projects/link.png" alt="live"/>
				</a>
			</div>
		<style jsx>{`
				.project{
						width: calc(100% - 2rem);
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
    				text-align: center;
    				margin: 0 1rem 3rem 1rem;
    				cursor: pointer;
				}

				  @media screen and (min-width: 600px) {
						.project {
								width: calc(50% - 2rem);
						}
					}

					@media screen and (min-width: 1000px) {
							.project {
								width: calc(100%/3 - 2rem);
						}
					}

				.wheel{
						width: 216px;
						height: 220px;
						display: block;
						position: relative;
						overflow: hidden;
				}

				.project:hover .mask{
							transform: rotate(30deg);
				}
				.project:hover .project-img{
							left: -30px;
							 filter: grayscale(0%);
				}

				.mask{
						transition: all .3s ease-in;
						transform: rotate(0deg);
						width: 310px;
						height: 310px;
						float: left;
						margin: -47px 0 0 -47px;
						position: relative;
						z-index: 2;
						background: url(static/img/projects/pentagon.png) center center no-repeat;
				}

				.project-img{
						width: 269px;
						height: 230px;
						left: -56px;
						display: block;
						position: absolute;
						background-repeat: repeat;
						background-color: #e7e7e7;
						transition: all .3s ease-in;
						filter: grayscale(100%);
				}
				.title{
						font-size: 1rem;
						font-weight: bold;
						margin: 1rem 0 0.25rem 0;
				}
				.description{
					  font-size: .85rem;
    				color: #606060;
				}
				.links a{
					display: inline-block;
					margin: .25rem;
				}
				.links a img{
					width: 1.25rem;
					filter: invert(25%)
				}
				.links a img:hover{
					filter: invert(0%)
				}
		`}</style>
	</div>
)

export default Project;
