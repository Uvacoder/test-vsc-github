/**
 * Created by vishwas3 on 10/11/17.
 */

export default function(state = {
	count: 9,
	list: [
		{
			title: 'Discoh! Soundcloud client.',
			description: 'A soundcloud client build on react-redux. Its a browser based music player which uses soundcloud API.',
			imageUrl: 'static/img/projects/discoh.jpg',
			codeUrl: 'https://github.com/vsc-github/discoh-soundcloud',
			demoUrl: 'https://vsc-github.github.io/discoh-soundcloud/'
		},
		{
			title: 'Classwroom',
			description: 'I started Classwroom.com during the final year of my college to solve the hassle of offline aptitude tests in college.',
			imageUrl: 'static/img/projects/classwroom.jpg',
			codeUrl: '',
			demoUrl: 'http://classwroom.com/'
		},
		{
			title: 'Matrix Character Slots',
			description: 'Its an animated react component that changes its text like characters in the matrix(movie).',
			imageUrl: 'static/img/projects/matrix.jpg',
			codeUrl: 'https://github.com/vsc-github/react-character-slot-machine',
			demoUrl: 'https://vsc-github.github.io/react-character-slot-machine/'
		},
		{
			title: 'React-redux-offline-starter',
			description: 'This is a starter template to start a react-redux project right away with offline caching support by deafult.',
			imageUrl: 'https://s1.postimg.org/1jiuosltzz/damian-watracz-design-project-unstoppable-foundation.jpg',
			codeUrl: 'https://github.com/vsc-github/simplest-offline-react-redux-starter',
			demoUrl: 'https://vsc-github.github.io/simplest-offline-react-redux-starter/'
		},
		{
			title: 'Coderpad Clone',
			description: 'It was part of the hiring challenge at Voodoo. Its a realtime in-browser coding tool, that compiles the code in realtime. (failing dependencies now)',
			imageUrl: 'static/img/projects/codepad.jpg',
			codeUrl: 'https://github.com/vsc-github/Relatime-JS-Code-Editor-Compiler',
			demoUrl: 'https://coderpad-clone.herokuapp.com/'
		},
		{
			title: 'React FCM Web Notifications',
			description: 'Web Push Notifications example using Firebase Cloud Messaging (FCM) in react+redux.',
			imageUrl: 'static/img/projects/fcm.jpg',
			codeUrl: 'https://github.com/vsc-github/react-fcm-web-notifications',
			demoUrl: 'https://react-fcm-web-notifications.herokuapp.com/#/'
		}
	]
}, action) {
	const { type } = action;

	switch (type) {
		default:
			return state;
	}
}
