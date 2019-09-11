import React from 'react';

const FilterBar = ({ updatesearchTerm }) => (
	<div>
		<div>Search by your contact name:</div>
		<input
			placeholder='Name...'
			type='text'
			onChange={ev => {
				updatesearchTerm(ev.target.value);
			}}
		/>
	</div>
);

export default FilterBar;
