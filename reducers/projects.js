/**
 * Created by vishwas3 on 10/11/17.
 */

export default function(state = {
	count: 9,
	list: [
		{
			title: '',
			description: '',
			imageUrl: '',
			codeUrl: '',
			demoUrl: ''
		}
	]
}, action) {
	const { type } = action;

	switch (type) {
		default:
			return state;
	}
}
