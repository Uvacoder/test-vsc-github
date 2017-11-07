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
			typeSpeed: 50,
			backSpeed: 50,
			loop: true,
			loopCount: Infinity
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
					.type-wrap{
						    text-shadow: 0 1px 3px #000;
    						color: #fff;
					}
				`}</style>
			</div>
		);
	}
}

export default TypedBio;
