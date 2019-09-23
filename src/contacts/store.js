import { observable } from 'mobx';

export const myStore = observable({
	myContacts: [],
	setMyContacts: function(newContacts) {
		myStore.myContacts = newContacts.map(obj => ({ ...obj }));
	},
	filteredContacts: [],
	setFilteredContacts: function(newContacts) {
		myStore.filteredContacts = newContacts.map(obj => ({ ...obj }));
	},
	searchTerm: '',
	setSearchTerm: function(newTerm) {
		myStore.searchTerm = newTerm;
	}
});
