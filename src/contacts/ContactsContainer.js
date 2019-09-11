import React, { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar';
import List from './components/List';
import { getData } from './utils/contactsHelpers';

const ContactsContainer = () => {
	const [myContacts, setMyContacts] = useState([]);
	const [filteredContacts, setFilteredContacts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const updatesearchTerm = value => setSearchTerm(value);
	const filterContacts = () => {
		if (myContacts.length) {
			const newContacts = myContacts.filter(c =>
				c.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setFilteredContacts(newContacts);
		}
	};

	useEffect(() => {
		getData()
			.then(setMyContacts)
			.catch(console.error);
	}, []);

	useEffect(filterContacts, [myContacts, searchTerm]);

	return (
		<div>
			<FilterBar updatesearchTerm={updatesearchTerm} />
			<List filteredContacts={filteredContacts} />
		</div>
	);
};

export default ContactsContainer;
