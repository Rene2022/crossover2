import React from 'react';

export default function Tournament_Card({ name, place }) {
	const colorIndex = [
		'Red',
		'Blue',
		'Green',
		'rgb(255, 125, 0)',
		'rgb(106, 90, 205)',
		'rgb(123, 145, 41)',
		'rgb(42, 52, 61)',
		'Black',
	];

	return (
		<div className='Card'>
			<div className='Team' style={{ backgroundColor: colorIndex[place] }}>
				{name}
			</div>
		</div>
	);
}
