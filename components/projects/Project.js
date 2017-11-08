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
		<style jsx>{`
				.project{
						display: inline-block;
				}
				a{
						width: 216px;
						height: 220px;
						display: block;
						position: relative;
						overflow: hidden;
				}

				a:hover .mask{
							transform: rotate(30deg);
				}
				a:hover .project-img{
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
		`}</style>
	</div>
)

export default Project;
