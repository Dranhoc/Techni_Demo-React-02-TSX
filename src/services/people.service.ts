import type { PeopleData, PersonJson } from '../@types/people';
import rawPeople from './../data/people.json';
const people = rawPeople as PersonJson[];

export function getPeople(): PeopleData {
	const data = people.map((person) => ({
		...person,
		birthDate: new Date(person.birthDate),
	}));

	return data;
}
