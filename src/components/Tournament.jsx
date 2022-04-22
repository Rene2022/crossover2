import React, { useState, useEffect } from 'react';
import Tournament_Card from './Tournament_Card';

//style
import './Tournament.css';

export default function Tournament() {
	const listOfPeople = [
		'Mario Bro',
		'BDG Fan',
		'Freezeezie',
		'Porkie',
		'Placeholder',
		'Plant',
		'Zombie',
		'Treasure Trove',
		'Giygase',
		'Froggie',
		'Crossover',
		'Xenoblader',
		'Beholder',
	];

	const [teams, setTeams] = useState([[], [], [], []]);

	useEffect(() => {
		let copyOfList = listOfPeople.slice();
		let newList = [];
		let listOfLists = [];

		for (let index = 0; index < 4; index++) {
			for (let index2 = 0; index2 < 2; index2++) {
				let RNG = Math.floor(Math.random() * copyOfList.length);
				let team = { name: 'The ' + copyOfList[RNG] + 's', gridIndex: index };
				newList.push(team);
				copyOfList.splice(RNG, 1);
			}
		}

		listOfLists.push(newList);

		newList = [];

		for (let index3 = 0; index3 < 4; index3++) {
			if (Math.floor(Math.random() * 100) < 50) {
				let team = { name: listOfLists[0][index3 * 2].name, gridIndex: Math.floor(index3 / 2 + 4) };
				newList.push(team);
			} else {
				let team = {
					name: listOfLists[0][index3 * 2 + 1].name,
					gridIndex: Math.floor(index3 / 2 + 4),
				};
				newList.push(team);
			}

			console.log('test', index3 * 2);
		}

		listOfLists.push(newList);

		newList = [];

		for (let index5 = 0; index5 < 2; index5++) {
			if (Math.floor(Math.random() * 100) < 50) {
				let team3 = { name: listOfLists[1][index5].name, gridIndex: 6 };
				newList.push(team3);
			} else {
				let team3 = { name: listOfLists[1][index5 + 1].name, gridIndex: 6 };
				newList.push(team3);
			}
		}

		listOfLists.push(newList);

		newList = [];

		let team2 = { name: listOfLists[2][Math.floor(Math.random() * 2)].name, gridIndex: 7 };
		newList.push(team2);

		listOfLists.push(newList);

		console.log(listOfLists);

		setTeams(listOfLists);
	}, []);

	return (
		<div className='Tournament'>
			<h1>Tournament Bracket:</h1>
			<div className='Bracket'>
				<div className='Group'>
					{teams[0].map((team, index) => (
						<Tournament_Card key={index} name={team.name} place={team.gridIndex} row={0} />
					))}
				</div>
				<div className='Group'>
					{teams[1].map((team, index) => (
						<Tournament_Card key={index} name={team.name} place={team.gridIndex} row={1} />
					))}
				</div>
				<div className='Group'>
					{teams[2].map((team, index) => (
						<Tournament_Card key={index} name={team.name} place={team.gridIndex} row={2} />
					))}
				</div>
				<div className='Group'>
					{teams[3].map((team, index) => (
						<Tournament_Card key={index} name={team.name} place={team.gridIndex} row={2} />
					))}
				</div>
			</div>
		</div>
	);
}
