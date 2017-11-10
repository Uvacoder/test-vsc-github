/**
 * Created by vishwas3 on 10/11/17.
 */

export default function(state = {
	count: 9,
	list: [
		{
			title: 'React-redux-offline-starter',
			description: 'This is a simple boilerplate to start a react-redux project right away with offline caching support by deafult.',
			imageUrl: 'https://s1.postimg.org/1jiuosltzz/damian-watracz-design-project-unstoppable-foundation.jpg',
			codeUrl: 'https://github.com/vsc-github/simplest-offline-react-redux-starter',
			demoUrl: 'https://vsc-github.github.io/simplest-offline-react-redux-starter/'
		},
		{
			title: 'Classwroom',
			description: 'I started Classwroom.com during the final year of my college to solve the hassle of offline aptitude tests in college.',
			imageUrl: 'static/img/projects/classwroom.jpg',
			codeUrl: '',
			demoUrl: 'http://classwroom.com/'
		}
	]
}, action) {
	const { type } = action;

	switch (type) {
		default:
			return state;
	}
}
