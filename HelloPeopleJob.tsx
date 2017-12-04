import * as React from 'react';
import {Action} from "redux";
import {Person} from "./index";

interface Props {
    people: Person[];
}

export default class HelloPeopleJob extends React.Component<Props> {

    render() {
        const { people } = this.props;

        return (
            <>
                {
                    people.map(person => {
                        if (person.job && person.job.name != '')
                            return (
                                <div key={person.firstName + person.lastName}>
                                    Hello { person.firstName } { person.lastName } the { person.job.name }!!
                                </div>
                            );
                        else
                            return (
                                <div key={person.firstName + person.lastName}>
                                    Hello { person.firstName } { person.lastName }!!
                                </div>
                            );
                    })
                }
            </>
        );
    }
}
