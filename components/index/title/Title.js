/**
 * Created by vishwas3 on 11/9/17.
 */

import React from 'react'

export const Title = () => (
	<div className="head">
		Vishwas Singh Chouhan
		<style jsx>{`
			.head{
				text-align: center;
				font-size: 2.5rem;
				letter-spacing: .35rem;
				font-weight: bold;
				cursor: pointer;
			}
			.head :hover{
				color: #a8a8a8;
			}
		`}
		</style>
	</div>
)

export default Title
