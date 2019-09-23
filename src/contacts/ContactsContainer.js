import React, { useEffect } from 'react';
import FilterBar from './components/FilterBar';
import List from './components/List';
import { getData } from './utils/contactsHelpers';
import { observer } from 'mobx-react-lite';

const ContactsContainer = observer(({ store }) => {
	const {
		setMyContacts,
		filteredContacts,
		updateFilteredContacts,
		updateSearchTerm
	} = store;

	useEffect(() => {
		getData()
			.then(setMyContacts)
			.then(updateFilteredContacts)
			.catch(console.error);
	}, []); /* eslint-disable-line */

	return (
		<div>
			<FilterBar
				updateSearchTerm={updateSearchTerm}
				updateFilteredContacts={updateFilteredContacts}
			/>
			<List filteredContacts={filteredContacts} />
		</div>
	);
});

export default ContactsContainer;
