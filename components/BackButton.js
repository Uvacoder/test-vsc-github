/**
 * Created by vishwas3 on 12/9/17.
 */

import React from 'react'

export const BackButton = () => (
	<div className="return-button">
		<img src="static/img/left-arrow.png" alt=""/>
		return
		<style jsx>{`
			.return-button{
			  display: flex;
    		justify-content: center;
    		align-items: Center;
			  position: fixed;
				bottom: 8vh;

				left: 50%;
				transform: translateX(-50%);

				background-color: white;
				border: 3px solid #212121;
				border-radius: 3rem;
				padding: 1rem 3.5rem;
				text-transform: uppercase;
				letter-spacing: 1px;
				font-weight: 700;
				outline: none;
				z-index: 666;
				cursor: pointer;
			}
			.return-button img{
 				position: absolute;
				-webkit-transition: all 0.3s;
				-moz-transition: all 0.3s;
				transition: all 0.3s;
    		left: 30%;
    		opacity: 0;
			}
			.return-button:hover img{
    		left: 10%;
    		opacity: 1;
			}
			.return-button:hover{
				background-color: #f3efef;
			}

		 	@media screen and (min-width: 600px) {
		 		.return-button{
					left: 8vh;
					transform: translateX(0);
				}
			}

			@media screen and (min-width: 1000px) {
				.return-button{
					left: 8vh;
					transform: translateX(0);
				}
			}

		`}</style>
	</div>
)

export default BackButton;
