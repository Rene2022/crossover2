import React, {useState, useEffect} from 'react';
import Tournament_Card from './Tournament_Card';

export default function Tournament() {
	const listOfPeople = [
		"Mario Bro",
		"BDG Fan",
		"Freezeezie",
		"Porkie",
		"Placeholder",
		"Plant",
		"Zombie",
		"Treasure Trove",
		"Giygase",
		"Froggie",
		"Crossover",
		"Xenoblader",
		"Beholder"
	]

	const [teams, setTeams] = useState([[],[]]);

	useEffect(() => {
		let copyOfList = listOfPeople.slice(); 
		let newList = [];
		let listOfLists = [];

        for (let index = 0; index < 4; index++) {
			for (let index2 = 0; index2 < 2; index2++) {
				let RNG = Math.floor(Math.random() * copyOfList.length);
				let team = {name: "The " + copyOfList[RNG] + "s", gridIndex: index};
				newList.push(team);
				copyOfList.splice(RNG, 1);
			}
		}

		listOfLists.push(newList);

		newList = [];

		for (let index3 = 0; index3 < 2; index3++) {
			for (let index4 = 0; index4 < 2; index4++) {
				if(Math.floor(Math.random() * 100) < 50){
					let team = {name: listOfLists[0][index3*2].name, gridIndex: index3+4};
					newList.push(team);
				}
				else{
					let team = {name: listOfLists[0][(index3*2)+1].name, gridIndex: index3+4};
					newList.push(team);
				}
			}
			
			console.log("test", index3*2);
		}

		listOfLists.push(newList);

		console.log(listOfLists);

		setTeams(listOfLists);		
    }, [])

	return (
		<div>
			{teams[0].map((team, index) => (
            <Tournament_Card key={index} name={team.name} place={team.gridIndex} row={0}/>
            ))}
			<br/>
			{teams[1].map((team, index) => (
            <Tournament_Card key={index} name={team.name} place={team.gridIndex} row={0}/>
            ))}
		</div>
	);
}
