/**
 * Created by vishwas3 on 12/9/17.
 */

import React from 'react'
import styles from './superman-styles'

class Superman extends React.Component {
	constructor() {
		super();
		this.state = {
			flip: false,
			cardWidth: null,
			cardHeight: null,
		}
	}

	componentDidMount() {
		const profileCard = document.getElementById('profileCard');
		setTimeout(() => {
			this.setState({
				cardWidth: profileCard.offsetWidth,
				cardHeight: profileCard.offsetHeight,
			});
		}, 750);
	}

	render() {
		return <div className={`card-container ${this.state.flip ? 'flipped' : ''}`}
								style={{width: this.state.cardWidth + 'px', height: this.state.cardHeight + 'px'}}>
			<div className="card" id="profileCard">
				<div className="profile">
					<div className="group">
						<div className="hair"></div>
						<div className="ear"></div>
						<div className="ear right"></div>
						<div className="fringe"></div>
						<div className="face"></div>
						<div className="eye"></div>
						<div className="nose"></div>
						<div className="mouth">
							<div className="tongue"></div>
						</div>
						<div className="neck"></div>
						<div className="body">
							<div className="logo"></div>
						</div>
						<div className="cape"></div>
					</div>
				</div>
				<div className="nameWork">
					<div className="fname">Vishwas</div>
					<div className="work"><img src="https://www.tinder.com/static/build/c50949339ea708367f1b05ceccc832bd.svg"
																		 alt=""/>Full stack developer at Waylo
					</div>
					<div className="work"><img src="https://www.tinder.com/static/build/a64e9b4a0b2fb990b973b8c95fb81827.svg"
																		 alt=""/>0 miles away (remote)
					</div>
				</div>
				<div className="bio">
					All the images above are made only using HTML/CSS. Go on, inspect it yourself.
					<br/><br/>
					Not impressed? Let's talk and I'll try to change your mind.
					<br/><br/>
					Click on the buttons below for my contact details.
				</div>
				<div className="buttons" onClick={() => this.setState({flip: true})}>
					<div className="button"><img src="static/img/contact/dislike.png" alt=""/></div>
					<div className="button"><img src="static/img/contact/superlike.png" alt=""/></div>
					<div className="button"><img src="static/img/contact/like.png" alt=""/></div>
				</div>
			</div>
			<div className="card-back"
					 style={{width: this.state.cardWidth + 'px', height: this.state.cardHeight + 'px'}}>
				<div className="heading">drop a message</div>
				<input type="text" placeholder="name"/>
				<input type="text" placeholder="email"/>
				<input type="text" placeholder="subject"/>
				<textarea placeholder="message"></textarea>
				<div className="send">Send Message</div>
				<div className="bar"></div>
				<div className="heading">Personals</div>
				<div className="touch">Email: vishwas.s.chouhan@gmail.com</div>
				<div className="touch">Phone: +91 8959076706</div>
				<div className="back">
					<img src="static/img/left-arrow.png" alt="<"
							 onClick={() => this.setState({flip: false})}/>
				</div>
			</div>

			<style jsx>{styles}</style>
		</div>
	}
}

export default Superman;
