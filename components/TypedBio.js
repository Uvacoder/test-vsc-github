/**
 * Created by vishwas3 on 7/11/17.
 */

import React from 'react';
import Typed from 'typed.js';

class TypedBio extends React.Component {
	componentDidMount() {
		// If you want to pass more options as props, simply add
		// your desired props to this destructuring assignment.
		const { strings } = this.props;
		// You can pass other options here, such as typing speed, back speed, etc.
		const options = {
			strings: strings,
			startDelay: 1000,
			typeSpeed: 50,
			backSpeed: 20,
			loop: false,
			smartBackspace: true,
		};
		// this.el refers to the <span> in the render() method
		this.typed = new Typed(this.el, options);
	}

	componentWillUnmount() {
		// Make sure to destroy Typed instance on unmounting
		// to prevent memory leaks
		this.typed.destroy();
	}

	render() {
		return (
			<div className="wrap">
				<div className="type-wrap">
          <span
						style={{ whiteSpace: 'pre' }}
						ref={(el) => { this.el = el; }}
					/>
				</div>

				<style jsx>{`

					.wrap{
							position: absolute;
							top: 4rem;
							left: 2rem;
							z-index: 100;
					}

					.type-wrap{
						  text-shadow: 0 1px 3px #000;
    					color: #fff;
    					font-size: 1.5rem;
					}

					 @media screen and (min-width: 600px) {
								.wrap{
										left: 3rem;
								}
								.type-wrap{
										font-size: 2.5rem;
								}
					}

					@media screen and (min-width: 1000px) {
							.wrap{
										left: 5rem;
								}
								.type-wrap{
										font-size: 4rem;
								}
					}
				`}</style>
			</div>
		);
	}
}

export default TypedBio;
