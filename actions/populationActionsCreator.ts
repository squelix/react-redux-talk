import { createAction } from "redux-actions";
import { ActionCreator } from "redux";
import { Person } from "../index";

const addPerson: ActionCreator<void> = (person: Person) => dispatch => {
    const action = person ? createAction<Person>('ADD_PERSON')(person) : createAction('ADD_PERSON')();
    return dispatch(action);
};

const initPeople: ActionCreator<void> = (people: Person[]) => dispatch => {
    const action = people ? createAction<Person[]>('INIT_PEOPLE')(people) : createAction('INIT_PEOPLE')();
    return dispatch(action);
};

const updateNewPeopleField: ActionCreator<void> = (field: string, value: any) => dispatch => {
    const action = createAction<any>('UPDATE_NEW_PEOPLE_FIELD')({field, value});
    return dispatch(action);
};


const removePerson: ActionCreator<void> = (person: Person) => dispatch => {
    const action = person ? createAction<Person>('REMOVE_PERSON')(person) : createAction('REMOVE_PERSON')();
    return dispatch(action);
};


export default {
    addPerson,
    removePerson,
    initPeople,
    updateNewPeopleField,
}