import * as React from 'react';
import {Person, PopulationActions, RootState} from "./index";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import populationActionsCreator from './actions/populationActionsCreator';
import {initialPeople} from "./constants";

interface Props {
    people: Person[];
    newPeople: Person;
    populationActions: PopulationActions;
}

class HelloPeopleJobRedux extends React.Component<Props> {

    componentDidMount() {
        this.props.populationActions.initPeople(initialPeople);
    }

    render() {
        const { newPeople, people, populationActions } = this.props;

        return (
            <>
                {
                    people.map(person => {
                        return (
                            <div key={person.firstName + person.lastName} className='people'>
                                <span>
                                    Hello { person.firstName } { person.lastName }!!
                                    <button className='delete-button' onClick={() => populationActions.removePerson(person)}>X</button>
                                </span>
                            </div>
                        );
                    })
                }
                <div>
                    <input type="text" onChange={event => populationActions.updateNewPeopleField('firstName', event.target.value)}
                           value={newPeople.firstName}/>
                    <input type="text" onChange={event => populationActions.updateNewPeopleField('lastName', event.target.value)}
                           value={newPeople.lastName}/>
                    <input type="number" onChange={event => populationActions.updateNewPeopleField('age', event.target.value)}
                           value={newPeople.age}/>
                    <button onClick={() => populationActions.addPerson(newPeople)} className='add-button'
                            disabled={newPeople.age <= 0 || newPeople.firstName === '' || newPeople.lastName === ''}>
                        New person
                    </button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    people: state.population.people,
    newPeople: state.population.newPeople,
});

const mapDispatchToProps = (dispatch) => ({
    populationActions: bindActionCreators(populationActionsCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloPeopleJobRedux);
