import 'isomorphic-fetch';
import React from 'react';
import WebFont from '../components/WebFont';
import Superman from '../components/Superman/Superman';
import Header from '../components/Header';

class Experience extends React.Component {

	render() {
		return (
			<div className="contacts-container">
				<WebFont/>
				<Header/>
				<Superman/>

				<style jsx>{`

				.contacts-container{
						padding: 0;
						max-width: 800px;
						margin: 0 auto;
						padding: 1rem 1rem 0 1rem;
				}
				@media screen and (min-width: 600px) {
					.contacts-container {
							padding: 5rem 5rem 0 5rem;
					}
				}

				@media screen and (min-width: 1000px) {
						.contacts-container {
							padding: 5rem 5rem 0 5rem;
					}
				}
				`}</style>
			</div>
		);
	}
}

export default Experience;
