/**
 * Created by vishwas3 on 12/9/17.
 */

import React from 'react'

export const Social = () => (
	<div className="social">
		<img src="static/img/linkedin.png" alt="Linkedin"/>
		<img src="static/img/github.png" alt="Github"/>
		<img src="static/img/stackoverflow.png" alt="Stackoverflow"/>
		<img src="static/img/twitter.png" alt="Twitter"/>
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
