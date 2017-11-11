/**
 * Created by vishwas3 on 11/9/17.
 */

import React from 'react'
import Link from 'next/link'

export const Navigation = () => (
	<nav>
		<ul>
			{/*<Link href="/">
				<li title="back to square one">Home</li>
			</Link>*/}
			<Link href="/blog">
				<li title="bonding with bytes">Tech Blog</li>
			</Link>
			<Link href="/experience">
				<li title="past adventures">Experience</li>
			</Link>
			<Link href="/projects">
				<li title="side projects">Projects</li>
			</Link>
			<Link href="/contact">
				<li title="hit me up">Contact</li>
			</Link>
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
