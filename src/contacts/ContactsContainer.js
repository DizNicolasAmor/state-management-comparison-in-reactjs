import React, { useEffect } from 'react';
import FilterBar from './components/FilterBar';
import List from './components/List';
import { getData } from './utils/contactsHelpers';
import { observer } from 'mobx-react-lite';

const ContactsContainer = observer(({ store }) => {
	const {
		myContacts,
		setMyContacts,
		filteredContacts,
		setFilteredContacts,
		searchTerm,
		setSearchTerm
	} = store;

	const updatesearchTerm = value => setSearchTerm(value);
	const filterContacts = () => {
		if (myContacts.length) {
			const newContacts = myContacts.filter(c =>
				c.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
			return setFilteredContacts(newContacts);
		}
	};

	useEffect(() => {
		getData()
			.then(setMyContacts)
			.catch(console.error);
	}, []); /* eslint-disable-line */

	useEffect(filterContacts, [myContacts, searchTerm]);

	return (
		<div>
			<FilterBar updatesearchTerm={updatesearchTerm} />
			<List filteredContacts={filteredContacts} />
		</div>
	);
});

export default ContactsContainer;
