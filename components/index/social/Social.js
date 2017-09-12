/**
 * Created by vishwas3 on 12/9/17.
 */

import React from 'react'

export const Social = () => (
	<div className="social">
		<a href="https://www.linkedin.com/in/vschouhan/" target="_blank">
			<img src="static/img/linkedin.png" alt="Linkedin"/>
		</a>
		<a href="https://github.com/vsc-github" target="_blank">
			<img src="static/img/github.png" alt="Github"/>
		</a>
		<a href="https://stackoverflow.com/users/5005669/vishwas-singh-chouhan" target="_blank">
			<img src="static/img/stackoverflow.png" alt="Stackoverflow"/>
		</a>
		<a href="https://twitter.com/emergenturd" target="_blank">
			<img src="static/img/twitter.png" alt="Twitter"/>
		</a>

		<style jsx>{`
			.social{
				text-align: center;
				margin-top: 3rem;
			}
			.social img{
				width: 3rem;
				/*-webkit-filter: grayscale(100%);
    		filter: grayscale(100%);*/
			}
		`}
		</style>
	</div>
)

export default Social
