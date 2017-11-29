import 'isomorphic-fetch';
import React from 'react';
import BackButton from '../components/BackButton';
import WebFont from '../components/WebFont';
import Superman from '../components/Superman/Superman';
class Experience extends React.Component {

	render() {
		return (
			<div className="soon">
				<BackButton/>
				<WebFont/>

				<Superman/>

				<style jsx>{`
				`}</style>
			</div>
		);
	}
}

export default Experience;
