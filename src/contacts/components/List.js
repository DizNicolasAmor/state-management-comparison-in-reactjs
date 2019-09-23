import React from 'react';
import '../styles/list.css';
import { observer } from 'mobx-react-lite';

const ListHeader = () => (
	<div className='list__row title'>
		<div>Name</div>
		<div>Phone</div>
	</div>
);

const Item = ({ person }) => (
	<div className='list__row body'>
		<div>{person.name}</div>
		<div>{person.phone}</div>
	</div>
);

const List = observer(({ filteredContacts }) => (
	<div className='list__wrapper'>
		<ListHeader />
		{filteredContacts.map(person => (
			<Item person={person} key={person._id} />
		))}
	</div>
));

export default List;
