/**
 * Created by vishwas3 on 12/9/17.
 */

import React from 'react'

export const Project = ({}) => (
	<div className="project">
		<a href="" >
			<span className="mask"></span>
			<span className="project-img"></span>
		</a>
			<div className="title">React-redux-offline-starter</div>
			<div className="description">
				This is a simple boilerplate to start a react-redux project right away with offline caching support by deafult.
			</div>
		<style jsx>{`
				.project{
						display: inline-flex;
						justify-content: center;
						flex-direction: column;
    				align-items: center;
    				text-align: center;
    				margin: 0 1rem;
    				cursor: pointer;
				}
				a{
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
						background: url(http://watracz.com/images/pentagon-mask.png) center center no-repeat;
				}

				.project-img{
						background-image: url(https://s1.postimg.org/1jiuosltzz/damian-watracz-design-project-unstoppable-foundation.jpg);
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
		`}</style>
	</div>
)

export default Project;
