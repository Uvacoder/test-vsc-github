import 'isomorphic-fetch';
import React from 'react';

import Header from '../components/Header';

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
				<style jsx>
					{`
						.container{
							  padding: 0;
								max-width: 800px;
								margin: 0 auto;
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
