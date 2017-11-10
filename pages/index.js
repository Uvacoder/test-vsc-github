import 'isomorphic-fetch';
import React from 'react';

import Header from '../components/Header';
import Social from '../components/index/social/Social';

class Index extends React.Component {

	render() {
		return (
			<div className="container">
				<Header />
				<div className="intro">
					I work at Dextra, a collaborative platform for creative professionals.
					I love creating for the web, using cutting age technologies for modern webapps.
				</div>
				<div className="outro">
					I write a blog here. Sometimes tech, sometimes about my insane adevntures in the himalayas. I'm into fitness & adventure travel. Also, I run. Like, a lot.
				</div>
				<Social />
				<style jsx>
					{`
						.container{
							  padding: 0;
								max-width: 800px;
								margin: 0 auto;
								padding: 1rem 1rem 0 1rem;
						}
						@media screen and (min-width: 600px) {
							.container {
									padding: 5rem 5rem 0 5rem;
							}
						}

						@media screen and (min-width: 1000px) {
								.container {
									padding: 5rem 5rem 0 5rem;
							}
						}
						.intro{
							margin-top: 4rem;
							font-size: 1.25rem;
							font-weight: 300;
    					letter-spacing: .05rem;
    					line-height: 2rem;
    					text-align: center;
						}
						.outro{
						  font-size: 1.25rem;
							font-weight: 300;
    					letter-spacing: .05rem;
    					line-height: 2rem;
    					text-align: center;
    					margin-top: 2rem;
						}
					`}
    	</style>
			</div>

		);
	}
}

export default Index;
