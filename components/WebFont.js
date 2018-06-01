/**
 * Created by vishwas3 on 11/11/17.
 */
import React from 'react';

class WebFont extends React.Component {
	componentDidMount() {
		if (!document.documentElement.classList.contains('wf-active')) {
			import('webfontloader').then(WebFont =>
				WebFont.load({
					google: {
						families: ['Montserrat:300,400']
					}
				})
			)
		}
	}

	render() {
		return (
			<style jsx global>{`
        html {
          font-family: sans-serif;
        }

        html.wf-active {
          font-family: 'Montserrat';
        }
      `}</style>
		)
	}
}

export default WebFont;
