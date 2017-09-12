/**
 * Created by vishwas3 on 11/9/17.
 */

import React from 'react'

export const Navigation = () => (
	<nav>
		<ul>
			<li>Home</li>
			<li>Tech Blog</li>
			<li>Lifestyle</li>
			<li>Experience</li>
			<li>Contact</li>
		</ul>

		<style jsx>{`
			ul{
				 text-align: center;
				 padding: 0;
			}
			nav ul li{
						 display: inline-block;
    				 text-align: center;
    				 padding: 0 .8em;
    				 font-size: 13px;
    				 letter-spacing: 2px;
    				 color: #666;
    				 cursor: pointer;
					}
			nav ul li:hover{
						color: #a8a8a8;
			}
		`}</style>
	</nav>
)

export default Navigation
