const initialState = {
	myContacts: [],
	searchTerm: ''
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_MY_CONTACTS':
			return { ...state, myContacts: action.newContacts };
		case 'UPDATE_SEARCH_TERM':
			return { ...state, searchTerm: action.newSearchTerm };
		default:
			return state;
	}
}

export default rootReducer;
