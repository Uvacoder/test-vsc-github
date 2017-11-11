import 'isomorphic-fetch';
import React from 'react';
import BackButton from '../components/BackButton';
import WebFont from '../components/WebFont';
class Experience extends React.Component {


	render() {
		return (
			<div className="soon">
				coming soon, very soon ...
				<BackButton/>
				<WebFont/>
				<style jsx>{`
						.soon{
							width: 100vw;
							height: 100vh;
							display: flex;
							justify-content: center;
							align-items: center;
						}
				`}</style>
			</div>
		);
	}
}

export default Experience;
