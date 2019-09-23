import { types } from 'mobx-state-tree';

const initialState = {
	myContacts: [],
	filteredContacts: [],
	searchTerm: ''
};

const PersonModel = types.model({
	_id: types.string,
	name: types.string,
	phone: types.string
});

const MyStore = types
	.model({
		myContacts: types.array(PersonModel),
		filteredContacts: types.array(PersonModel),
		searchTerm: types.string
	})
	.actions(self => ({
		setMyContacts: newContacts =>
			(self.myContacts = newContacts.map(obj => ({ ...obj }))),
		updateFilteredContacts: () => {
			if (self.myContacts.length) {
				const parsedTerm = self.searchTerm.toLowerCase();
				const byName = c => c.name.toLowerCase().includes(parsedTerm);
				const newContacts = self.myContacts.filter(byName);
				return (self.filteredContacts = newContacts.map(obj => ({
					...obj
				})));
			}
		},
		updateSearchTerm: newTerm => (self.searchTerm = newTerm)
	}));

export const myStore = MyStore.create(initialState);
