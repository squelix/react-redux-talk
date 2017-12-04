import * as React from 'react';
import {Person} from "./index";

interface Props {
    person: Person;
}

export default class Hello extends React.Component<Props> {

    render() {
        const { person } = this.props;

        return (
            <div>Hello { person.firstName } { person.lastName }!!</div>
        );
    }
}
