import 'isomorphic-fetch';
import React from 'react';
import Head from 'next/head'
import Rellax from 'rellax';
import BackButton from '../components/BackButton';
import WebFont from '../components/WebFont';
import Link from 'next/link'

class Experience extends React.Component {

	constructor() {
		super();
	}

	componentDidMount() {
		this.setState({
			rellax: new Rellax('.rellax')
		});
	}

	render() {
		return (
			<div className="experience">
				<BackButton/>
				<Head>
					<title>Professional Experience - Vishwas Singh Chouhan</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				</Head>
				<WebFont/>

				<div className="clouds">
					<img src="/static/img/experience/cloud1.png" alt="~" className="cloud c1"/>
					<img src="/static/img/experience/cloud2.png" alt="~" className="cloud c2"/>
					<img src="/static/img/experience/cloud3.png" alt="~" className="cloud c3"/>
				</div>

				<div className="rellax land" data-rellax-speed=".3"></div>
				<div className="rellax hills" data-rellax-speed=".2"></div>
				<div className="rellax mountains" data-rellax-speed=".1"></div>

				<div className="signboards">
					<div className="head-wrap">
						<img src="/static/img/experience/header.png"/>
					</div>
					<img src="/static/img/experience/arrow.png"/>
					<div className="signboards-wrap">

						<div className="first content">
								<div className="role">Full Stack Developer</div>
								<div className="company">Dextra</div>
								<div className="duration">December 2016 - current (11 months) | New Delhi, India</div>
								<img className="logo"
										 src="https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAi1AAAAJDk4NTA5YWEwLWUzOTctNDhhMS1hM2RmLTA0YzhmOWViNDkwMQ.png"
										 alt=""/>
								<div className="responsibilities">
									<div className="intro">Dextra is a social network for all artists to showcase, discover and
										collaborate with other artists.
									</div>
									<div>• Rebuilt the entire architecture moving from Angular to React-Redux.</div>
									<div>• Created a Server Side Rendering SPA that hydrates on client end for better SEO & Speed.</div>
									<div>• SEO optimization to score top ranks in google search results.</div>
									<div>• Built a full fledged dashboard to control all aspects of the product including the apps.</div>
									<div>• Technology Used: Node.js , React , Redux , Webpack , PM2, SASS, Styled-Components, Google
										Analytics, Facebook Pixel.
									</div>
								</div>
							<div className="links">
								<img src="static/img/projects/link.png" alt=""/>
								<div>Links:</div>
								<a href="https://www.dextra.art" target="_blank" rel="noopener">Dextra,</a>
								<a href="https://www.dextra.art/vrglobalsummit" target="_blank" rel="noopener">VR Global Summit</a>
								<div className="filler"></div>
							</div>
						</div>

						<div className="second content">
							<div className="role">Software Developer</div>
							<div className="company">Voodoo Technologies Private Limited</div>
							<div className="duration">June 2016 – November 2016 (6 months) | New Delhi, India</div>
							<img
								src="https://media.licdn.com/media/AAEAAQAAAAAAAAVUAAAAJGYwMGRmNjM4LTRhNGQtNDMxMS04NDE1LTI3YTU0Yzc4NDZkMg.png"
								alt="" className="logo"/>
							<div className="responsibilities">
								<div>• Executed and contributed to full-stack web development projects, with an emphasis on front end
									features, responsive design, browser manipulation and cross-browser compatibility.
								</div>
								<div>• Built web projects from scratch using AngularJS, Grunt, Yeoman, Sass/Scss.</div>
								<div>• Built SPA User Interfaces (Single Page Application) focusing on a cross-browser, cross-platform,
									adaptable responsive design.
								</div>
								<div>• Created REST APIs with Nodejs using Expressjs framework.</div>
							</div>
							<div className="links">
								<img src="static/img/projects/link.png" alt=""/>
								<div>Links:</div>
								<a href="https://yourstory.com/2015/10/voodoo-seed-funding/" target="_blank" rel="noopener">Voodoo,</a>
								<a href="https://yourstory.com/2015/10/tech30-2015-top-30-startups/" target="_blank" rel="noopener">Top 30 in tech</a>
								<div className="filler"></div>
							</div>
						</div>
						<div className="third content">
							<div className="role">Full Stack Engineer</div>
							<div className="company">Avshesh.com (by Metamorf Pvt. Ltd.)</div>
							<div className="duration">April 2015 – December 2015 (9 months) | New Delhi Area, India</div>

							<div className="responsibilities">
								<div className="intro">Avshesh.com by Metamorf is an online scrap trading platform used for sale and
									purchase of any type of scrap in bulk.
								</div>
								<div>• Developed the complete web portal (www.avshesh.com) & admin panel for posting, editing, searching
									& indexing of classifieds
								</div>
								<div>• Designed tracking algorithms to asses and track user activities on the website.</div>
								<div>• Technologies used: HTML/CSS/JS/JQuery , PHP , MySQL, GCM & google analytics.</div>
							</div>
							<div className="links">
								<img src="static/img/projects/link.png" alt=""/>
								<div>Links:</div>
								<a href="https://yourstory.com/2015/01/avshesh-e-waste/" target="_blank" rel="noopener">Yourstory</a>
								<div className="filler"></div>
							</div>
						</div>
						<div className="fourth content">
							<div className="role">Founder & Lead Developer</div>
							<div className="company">www.classwroom.com</div>
							<div className="duration">December 2014 – April 2015 (5 months) | College Campus, MITS Gwalior</div>

							<div className="responsibilities">
								<div className="intro">Classwroom.com is a personal project I founded to solve the problem of cluttered
									and unorganized classroom tests. Claswroom.com enable teachers to conduct automated tests and
									evaluation online with instant results and insights available for each student.
								</div>
								<div>• Build and deployed the entire webapp in 3 months.</div>
								<div>• Got the entire batch of 2016 to use it and conducted several assesment tests on the platform.
								</div>
								<div>• Technologies used: HTML/CSS/JS/JQuery , PHP , MySQL, GCM & google analytics.</div>
							</div>
							<div className="links">
								<img src="static/img/projects/link.png" alt=""/>
								<div>Links:</div>
								<a href="http://www.classwroom.com" target="_blank" rel="noopener">Classwroom,</a>
								<a href="http://www.pechakucha.org/cities/gwalior/presentations/dont-teach-tech-teach-with-tech" target="_blank" rel="noopener">Pecha Kucha</a>
								<div className="filler"></div>
							</div>
						</div>
						<div className="fifth content">
							<div className="placeholder">
								That's all folks ...
							</div>
						</div>
						<div className="sixth content">
							<div className="placeholder">
								... looking for more?
							</div>
						</div>
						<div className="seventh content">
							<div className="placeholder">
								Check out these &nbsp;<Link href="/projects"> side projects </Link>&nbsp; I've worked on.
							</div>
						</div>
						<img src="/static/img/experience/signboards.png"/>
					</div>
				</div>

				<style jsx>{`
					.experience{
					}
					.land{
						height: 400px;
						width: 100%;
						position: fixed;
						top: 530px;
						background-image: url(/static/img/experience/land.png);
						background-repeat: repeat-x;
						z-index: 50;
					}
					.hills{
						height: 700px;
						width: 100%;
						position: fixed;
						top: 230px;
						background-image: url(/static/img/experience/hills.png);
						background-repeat: repeat-x;
						z-index: 40;
					}
					.mountains{
						height: 700px;
						width: 100%;
						position: fixed;
						top: 100px;
						background-image: url(/static/img/experience/mountains.png);
						background-repeat: repeat-x;
						z-index: 30;
					}
					.signboards-wrap{
						position: relative;
						width: 100%;
    				max-width: 700px;
    				margin: 0 auto;
					}
					.signboards{
						position: relative;
						margin: 0 auto;
						top: 150px;
						width: 100%;
						z-index: 100;
						text-align: center;
					}
					.content{
						position: absolute;
						text-align: left;
						width: 70%;
						height: 8%;
						margin-top: 1rem;
						overflow: auto;
						overflow-x: hidden;
					}
					.content .logo{
						width: 4rem;
						position: ABSOLUTE;
						right: 1rem;
						top: 0;
					}
					.content .designation{
						font-size: 1rem;
						line-height: 1.5rem;
						color: #000000;
					}
					.content .company{
					  font-size: .9rem;
					  line-height: 1.2rem;
						color: #434649;
					}
					.content .duration{
					  font-size: .8rem;
					  line-height: 1rem;
						color: #434649;
					}
					.content .responsibilities{
						font-size: .9rem;
    				margin-top: 1.5rem;
					}
					.responsibilities .intro{
						margin: 0 0 .75rem 0;
					}
					.content .links{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						margin: 1rem 0 0 0;
					}
					.content .links img{
						width: 1rem;
						margin: 0 .25rem;
					}
					.content .links a{
						color: #212121;
    				margin: 0 .5rem;
					}
					.content .links .filler{
						flex-grow: 1;
					}
					.first{
						top: 2%;
    				left: 10%;
					}
					.second{
						top: 15.8%;
    				left: 20%;
					}
					.third{
						top: 30.3%;
    				left: 10%;
					}
					.fourth{
						top: 44.1%;
						left: 20%;
					}
					.fifth{
						top: 58.6%
						left: 10%;
					}
					.sixth{
						top: 72.4%
						left: 20%;
					}
					.seventh{
						top: 86%
						left: 10%;
					}
					.content .placeholder{
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.signboards img{
						display: block;
						width: 100%;
    				max-width: 700px;
    				margin: 0 auto;
					}
					.clouds{
						position: fixed;
					}
					.cloud{
							position: fixed;
							-webkit-transform: translate3d(0, 0, 0);
							-moz-transform: translate3d(0, 0, 0);
							-o-transform: translate3d(0, 0, 0);
							transform: translate3d(0, 0, 0);
					}
					.c1{
							top: 60px;
							-webkit-animation: cloud 80s linear infinite;
							-moz-animation: cloud 80s linear infinite;
							-o-animation: cloud 80s linear infinite;
							animation: cloud 80s linear infinite;
					}
					.c2{
							top: 30px;
							-webkit-animation: cloud 20s linear infinite;
							-moz-animation: cloud 20s linear infinite;
							-o-animation: cloud 20s linear infinite;
							animation: cloud 20s linear infinite;
					}
					.c3{
							top: 110px;
							left: 170px;
							-webkit-animation: cloud3 60s linear infinite;
							-moz-animation: cloud3 60s linear infinite;
							-o-animation: cloud3 60s linear infinite;
							animation: cloud3 60s linear infinite;
					}

					@keyframes cloud {
						0% {
							left: -1%
						}
						100% {
							left: 120%
						}
					}
					@-webkit-keyframes cloud {
						0% {
							left: -1%
						}
						100% {
							left: 120%
						}
					}
					@-moz-keyframes cloud {
						0% {
							left: -1%
						}
						100% {
							left: 100%
						}
					}

					// CLOUD 3 ANIMATION

					@keyframes cloud3 {
						0% {
							left: -20%
						}
						100% {
							left: 120%
						}
					}
					@-webkit-keyframes cloud3 {
						0% {
							left: -20%
						}
						100% {
							left: 120%
						}
					}
					@-moz-keyframes cloud3 {
						0% {
							left: -20%
						}
						100% {
							left: 100%
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Experience;
