
/**
 * Created by vishwas3 on 12/9/17.
 */

import React from 'react'
import Link from 'next/link'
import styles from './superman-styles'

export const Superman = () => (
		<div className="superman-container">

			<div className="containerx">
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
			</div>
			<div className="profile-card">
				<div className="profile-wrap">
					<div className="name">This Superman is created using CCS.<br/>
						How bout dat? <img src="static/img/sunglasses-emoji.png" alt="B)"/>
					</div>
					<div className="no"></div>
					<div className="info"><i className="fa fa-info"></i></div>
					<div className="yes"><i className="fa fa-heart"></i></div>
				</div>
			</div>

			<style jsx>{styles}</style>
		</div>
)

export default Superman;
