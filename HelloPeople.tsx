import * as React from 'react';
import {Person} from "./index";

interface Props {
    people: Person[];
}

export default class HelloPeople extends React.Component<Props> {

    render() {
        const { people } = this.props;

        return (
            <>
                {
                    people.map(person => <div key={person.firstName + person.lastName}>
                        Hello { person.firstName } { person.lastName }!!
                    </div>)
                }
            </>
        );
    }
}
