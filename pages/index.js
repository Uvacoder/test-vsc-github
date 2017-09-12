import 'isomorphic-fetch';
import React from 'react';

import Title from '../components/index/title/Title';

class Index extends React.Component {

	render() {
		const { stars } = this.props;
		return (
			<div className="container">
				<Title />
				<style jsx>
					{`
						.container{
							  padding: 0;
								max-width: 800px;
								margin: 0 auto;
						}
					`}
    	</style>
			</div>

		);
	}
}

export default Index;
