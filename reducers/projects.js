/**
 * Created by vishwas3 on 10/11/17.
 */

export default function(state = {
	count: 9,
	list: [
		{
			title: 'Classwroom',
			description: 'I started Classwroom.com during the final year of my college to solve the hassle of offline aptitude tests in college.',
			imageUrl: 'static/img/projects/classwroom.jpg',
			codeUrl: '',
			demoUrl: 'http://classwroom.com/'
		},
		{
			title: 'Discoh! soundcloud client.',
			description: 'Discoh is a soundcloud client build on react-redux. It uses soundcloud API to fetch top songs from different generes and plays them in the browser.',
			imageUrl: 'static/img/projects/discoh.jpg',
			codeUrl: 'https://github.com/vsc-github/discoh-soundcloud',
			demoUrl: 'https://vsc-github.github.io/discoh-soundcloud/'
		},
		{
			title: 'Matrix Character Slots Component',
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
	]
}, action) {
	const { type } = action;

	switch (type) {
		default:
			return state;
	}
}
