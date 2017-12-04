export interface Person {
    firstName: string;
    lastName: string;
    age: number;
    job?: Job;
}

export interface Job {
    name: string;
    location?: string;
}

export interface RootState {
    population: PopulationState;
}

export interface PopulationState {
    people: Person[];
    newPeople: Person;
}

export interface PopulationActions {
    addPerson: (person: Person) => void;
    initPeople: (people: Person[]) => void;
    updateNewPeopleField: (field: string, value: any) => void;
    removePerson: (person: Person) => void;
}