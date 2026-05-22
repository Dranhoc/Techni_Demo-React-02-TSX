export type PersonJson = {
	id: string;
	firstname: string;
	lastname: string;
	nickname: string | null;
	birthDate: string;
	isDev: boolean;
	gender: 'f' | 'h' | 'x';
};
export type PersonData = Omit<PersonJson, 'birthDate'> & { birthDate: Date };

export type PeopleData = PersonData[];
