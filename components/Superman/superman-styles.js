export default `
		
		.superman-container{
			transform: scale(.9);
			margin: 1rem 0 0 0;
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
		
		.container {
			position: absolute;
			margin: auto;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			width: 200px;
			height: 300px;
		}
		
		.profile {
			position: relative;
			width: 200px;
			height: 200px;
			border-radius: 100%;
			-webkit-border-radius: 100%;
			-moz-border-radius: 100%;
			border: 2px solid #FFF;
			overflow: hidden;
			background: #E8E9EB;
		}
		
		.group {
			left: -4px;
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
		
		.profile-card {
			margin: auto;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			width: 400px;
			height: 420px;
		}
		
		.profile-wrap {
			z-index: -1;
			margin: auto;
			left: 20px;
			width: 350px;
			height: 500px;
			background: #FFF;
		}
		
		.name {
			top: 300px;
			width: 100%;
			text-align: center;
			font-family: sans-serif;
		}
		
		.no {
			top: 350px;
			left: 49px;
			width: 100px;
			height: 100px;
			background: #FFF;
			border: 5px solid #EEE;
			border-radius: 100%;
			-webkit-border-radius: 100%;
			-moz-border-radius: 100%;
		}
		.no:before, .no:after {
			position: absolute;
			content: '';
			top: 23px;
			left: 45px;
			width: 8px;
			height: 50px;
			background: #F45B69;
			border-radius: 100px;
			-webkit-border-radius: 100px;
			-moz-border-radius: 100px;
		}
		.no:before {
			transform: rotate(45deg);
		}
		.no:after {
			transform: rotate(-45deg);
		}
		
		.info {
			top: 386px;
			left: 155px;
			width: 35px;
			height: 35px;
			background: #FFF;
			border: 5px solid #EEE;
			border-radius: 100%;
			-webkit-border-radius: 100%;
			-moz-border-radius: 100%;
		}
		.info i {
			position: absolute;
			top: 7px;
			left: 15px;
			font-size: 20px;
			color: #59C3C3;
		}
		
		.yes {
			top: 350px;
			left: 195px;
			width: 100px;
			height: 100px;
			background: #FFF;
			border: 5px solid #EEE;
			border-radius: 100%;
			-webkit-border-radius: 100%;
			-moz-border-radius: 100%;
		}
		.yes i {
			font-size: 50px;
			position: absolute;
			top: 26px;
			left: 27px;
			color: #61D095;
		}
		
		@media (max-width: 700px) {
			.container,
			.profile-card {
				transform: scale(0.8);
			}
		}
`;
