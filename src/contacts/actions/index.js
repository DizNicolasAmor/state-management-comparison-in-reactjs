const SET_MY_CONTACTS = 'SET_MY_CONTACTS';
const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';

export const setMyContactsAction = newContacts => ({
	type: SET_MY_CONTACTS,
	newContacts
});

export const updateSearchTermAction = newSearchTerm => ({
	type: UPDATE_SEARCH_TERM,
	newSearchTerm
});
