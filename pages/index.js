import 'isomorphic-fetch';
import React from 'react';

import Title from '../components/index/title/Title';

class Index extends React.Component {

	render() {
		const { stars } = this.props;
		return (
			<div>
				<Title />
			</div>
		);
	}
}

export default Index;
