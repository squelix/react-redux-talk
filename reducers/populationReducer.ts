import { PopulationState } from "../index";

const defaultState: PopulationState = {
    people: [],
    newPeople: {
        firstName: '',
        lastName: '',
        age: 0,
        job: {
            name: '',
            location: '',
        },
    },
};

export default function population(state = defaultState, action) {
    switch (action.type) {

        case 'INIT_PEOPLE':
            return {
                ...state,
                people: [...action.payload],
            };

        case 'ADD_PERSON':
            return {
                ...state,
                people: [...state.people, action.payload],
                newPeople: {
                    firstName: '',
                    lastName: '',
                    age: 0,
                    job: {
                        name: '',
                        location: '',
                    },
                }
            };

        case 'REMOVE_PERSON':
            return {
                ...state,
                people: state.people.filter(({firstName, lastName, age}) => firstName !== action.payload.firstName && lastName !== action.payload.lastName && age !== action.payload.age),
            };

        case 'UPDATE_NEW_PEOPLE_FIELD':
            return {
                ...state,
                newPeople: {
                    ...state.newPeople,
                    [action.payload.field]: action.payload.value
                }
            };

        case 'UPDATE_NEW_PEOPLE_JOB_FIELD':
            return {
                ...state,
                newPeople: {
                    ...state.newPeople,
                    job: {
                        ...state.newPeople.job,
                        [action.payload.field]: action.payload.value
                    }
                }
            };

        default:
            return state;
    }
}
