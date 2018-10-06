export default `
		
		.superman-container{
			transform: scale(.9);
			margin: 0;
			position: relative;
			height: 400px;
			margin-top: 3rem;
		}
		
		.container,
		.face,
		.hair,
		.nose,
		.ear,
		.neck,
		.body,
		.cape,
		.logo,
		.group,
		.fringe,
		.eye,
		.profile-card,
		.yes,
		.no,
		.info,
		.tongue,
		.profile-wrap,
		.name,
		.mouth {
			position: absolute;
		}
		
		.card{
			display: block;
			width: 90%;
    	max-width: 22em;
    	margin: 0 auto;
			box-shadow: 0 2px 10px 0 rgba(155,155,155,0.77);
			border-radius: 8px;
		}
		
		.nameWork{
		    padding: 1rem;
		    border-bottom: 1px solid rgba(0,0,0,0.1);
		}
		
		.fname{
			font-size: 1.4rem;
			color: #424242;
		}
		
		.work{
			color: #9b9b9b;
			font-size: .9rem;
			margin: .5rem 0 0 0;
		}
		
		.work img{
			margin-right: .5rem;
		}
		
		.profile {
			position: relative;
			height: 14rem;
			overflow: hidden;
			background: #E8E9EB;
		}
		
		.bio{
			overflow-wrap: break-word;
			word-break: break-word;
			word-wrap: break-word;
			white-space: pre-wrap;
			text-align: left;
			padding: .7rem 1rem;
			color: #807e7e;
			line-height: 1.25rem;
			border-bottom: 1px solid rgba(0,0,0,0.1);
		}
		
		.buttons{
			display: flex;
			justify-content: space-around;
			padding: 1rem 0 .5rem 0;
		}
		
		.buttons .button{
			 user-select: none;
			 cursor: pointer;
			 transition: transform .25s ease,-webkit-transform .25s ease;
		}
		
		.buttons .button:hover{
				transform: scale(1.1);
		}
		
		.group {
			position: absolute;
    	left: 22%;
		}
		
		.face {
			border-radius: 100px;
			-webkit-border-radius: 100px;
			-moz-border-radius: 100px;
			z-index: 20;
			top: 50px;
			left: 70px;
			width: 80px;
			height: 100px;
			background: #F0BEAF;
		}
		
		.hair {
			z-index: 3;
			top: 30px;
			left: 58px;
			width: 100px;
			height: 100px;
			border-radius: 100%;
			-webkit-border-radius: 100%;
			-moz-border-radius: 100%;
			background: #424B54;
		}
		
		.ear {
			z-index: 1;
			top: 86px;
			left: 58px;
			width: 30px;
			height: 30px;
			border-radius: 100%;
			-webkit-border-radius: 100%;
			-moz-border-radius: 100%;
			background: #F0BEAF;
		}
		.ear:before {
			position: absolute;
			top: 5px;
			left: 4px;
			content: '';
			width: 20px;
			height: 20px;
			border-radius: 100%;
			-webkit-border-radius: 100%;
			-moz-border-radius: 100%;
			background: #ED8A80;
		}
		
		.ear.right {
			left: 130px;
		}
		
		.fringe {
			z-index: 99;
			top: 40px;
			left: 75px;
			width: 80px;
			height: 40px;
			background: #424B54;
			border-radius: 100% 0 100% 100%;
		}
		.fringe:before {
			position: absolute;
			content: '';
			top: 10px;
			left: -15px;
			width: 20px;
			height: 40px;
			background: #424B54;
			border-radius: 100%;
			-webkit-border-radius: 100%;
			-moz-border-radius: 100%;
			transform: rotate(10deg);
		}
		
		.eye {
			z-index: 30;
			top: 100px;
			left: 80px;
			width: 10px;
			height: 10px;
			background: #424B54;
			border-radius: 100%;
			-webkit-border-radius: 100%;
			-moz-border-radius: 100%;
		}
		.eye:before {
			position: absolute;
			content: '';
			left: 50px;
			width: 10px;
			height: 10px;
			background: #424B54;
			border-radius: 100%;
			-webkit-border-radius: 100%;
			-moz-border-radius: 100%;
		}
		
		.nose {
			z-index: 20;
			top: 100px;
			left: 107px;
			width: 8px;
			height: 14px;
			background: #DB9B99;
			border-radius: 100px;
			-webkit-border-radius: 100px;
			-moz-border-radius: 100px;
		}
		
		.mouth {
			z-index: 20;
			top: 120px;
			left: 97px;
			width: 30px;
			height: 15px;
			border-radius: 0 0 100px 100px;
			background: #424B54;
			overflow: hidden;
		}
		
		.tongue {
			top: 5px;
			left: 8px;
			width: 30px;
			height: 20px;
			background: #F6828C;
			border-radius: 100%;
			-webkit-border-radius: 100%;
			-moz-border-radius: 100%;
		}
		
		.neck {
			z-index: 13;
			width: 30px;
			height: 30px;
			background: #F0BEAF;
			top: 130px;
			left: 97px;
			border-radius: 100%;
			-webkit-border-radius: 100%;
			-moz-border-radius: 100%;
		}
		
		.body {
			z-index: 10;
			top: 150px;
			left: 60px;
			width: 100px;
			height: 150px;
			background: #4D9DE0;
			border-radius: 100px;
			-webkit-border-radius: 100px;
			-moz-border-radius: 100px;
		}
		
		.cape {
			z-index: 4;
			top: 148px;
			left: 43px;
			width: 130px;
			height: 160px;
			background: #E15554;
			border-radius: 60px 60px 0 0;
		}
		
		.logo {
			top: 10px;
			left: 16px;
			width: 27px;
			height: 15px;
			border-bottom: 20px solid #ECD688;
			border-left: 23px solid transparent;
			border-right: 22px solid transparent;
		}
		.logo:before {
			position: absolute;
			content: '';
			top: 35px;
			left: -22px;
			border-top: 40px solid #ECD688;
			border-left: 35px solid transparent;
			border-right: 35px solid transparent;
		}
`;
