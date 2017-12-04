import * as React from 'react';
import {Person} from "./index";

interface Props {
    people: Person[];
}

export default class HelloPeopleJob_2 extends React.Component<Props> {

    render() {
        const { people } = this.props;

        return (
            <>
                {
                    people.map(person => {
                        if (person.job && person.job.name != '')
                            return (
                                <div key={person.firstName + person.lastName}>
                                    Hello { person.firstName } { person.lastName }!!
                                    <button onClick={() => alert(`My job is ${person.job.name}`)}>
                                        JOB
                                    </button>
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
