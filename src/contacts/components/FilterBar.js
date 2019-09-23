import React from 'react';

const FilterBar = ({ updateSearchTerm, updateFilteredContacts }) => (
	<div>
		<div>Search by your contact name:</div>
		<input
			placeholder='Name...'
			type='text'
			onChange={ev => {
				updateSearchTerm(ev.target.value);
				updateFilteredContacts();
			}}
		/>
	</div>
);

export default FilterBar;
