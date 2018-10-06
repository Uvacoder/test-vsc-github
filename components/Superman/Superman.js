/**
 * Created by vishwas3 on 12/9/17.
 */

import React from 'react'
import Link from 'next/link'
import styles from './superman-styles'

export const Superman = () => (
	<div className="superman-container">

		<div className="containerx">
			<div className="card">
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
																		 alt=""/> 0 miles away (remote)
					</div>
				</div>
				<div className="bio">
					All the images above are made only using HTML/CSS. Go on, inspect it yourself.
					<br/><br/>
					Not impressed? Let's talk and I'll try to change your mind.
					<br/><br/>
					Click on the buttons below to see my contact details.
				</div>
				<div className="buttons">
					<div className="button"><img src="static/img/contact/dislike.png" alt=""/></div>
					<div className="button"><img src="static/img/contact/superlike.png" alt=""/></div>
					<div className="button"><img src="static/img/contact/like.png" alt=""/></div>
				</div>
			</div>
		</div>

		<style jsx>{styles}</style>
	</div>
)

export default Superman;
