import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedRouter, routerMiddleware, routerReducer } from "react-router-redux";
import { Switch, Route } from 'react-router-dom';
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import * as tsTypes from './index.d';
import populationReducer from "./reducers/populationReducer";
import history from './history';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import HelloPeopleJobRedux from "./HelloPeopleJobRedux";

import './styles/main.scss';

function getFromWindow<T>(propName: string, defaultValue?: T): T|undefined {
    return propName in window ? (window as any)[propName] : defaultValue;
}

const app = document.querySelector('#app');

const browserHistoryMiddleware = routerMiddleware(history);
const composeEnhancers = getFromWindow('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', compose);

const store = createStore(
    combineReducers<tsTypes.RootState>({
        routing: routerReducer,
        population: populationReducer,
    }),
    composeEnhancers(applyMiddleware(thunk, browserHistoryMiddleware))
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={HelloPeopleJobRedux}/>
                </Switch>
            </React.Fragment>
        </ConnectedRouter>
    </Provider>, app,
);

export = tsTypes;







// const people: tsTypes.Person[] = [
//     { firstName: 'Bryan', lastName: 'Jonhson', age: 70, job: { name: 'singer' } },
//     { firstName: 'Michael', lastName: 'Jackson', age: 51 },
//     { firstName: 'Noel', lastName: 'Gallagher', age: 50 , job: { name: 'guitarist' }},
// ];


// const renderMergedProps = (component, ...rest) => {
//     const finalProps = {...rest};
//     return (
//         React.createElement(component, finalProps)
//     );
// };
//
// const PropsRoute = ({ component, ...rest }) => {
//     return (
//         <Route {...rest} render={routeProps => {
//             return renderMergedProps(component, routeProps, rest);
//         }}/>
//     );
// };
//
// ReactDOM.render(
//     <Router history={history}>
//         <div>
//             <Switch>
//                 <PropsRoute exact path='/' component={HelloPeopleJob_2} people={people}/>
//             </Switch>
//         </div>
//     </Router>, document.querySelector('#app'),
// );







// ReactDOM.render(<HelloPeopleJob_2 people={people}/>, app);



// import HelloPeopleJob from "./HelloPeopleJob";
// const people: Person[] = [
//     { firstName: 'Bryan', lastName: 'Jonhson', age: 70, job: { name: 'singer' } },
//     { firstName: 'Michael', lastName: 'Jackson', age: 51 },
//     { firstName: 'Noel', lastName: 'Gallagher', age: 50 , job: { name: 'guitarist' }},
// ];
// ReactDOM.render(<HelloPeopleJob people={people}/>, app);




// import Hello from 'Hello';
// const bryanJonhson: Person = { firstName: 'Bryan', lastName: 'Jonhson', age: 70 };
// ReactDOM.render(<Hello person={bryanJonhson}/>, app);




// import HelloPeople from "./HelloPeople";
// const people: Person[] = [
//     { firstName: 'Bryan', lastName: 'Jonhson', age: 70 },
//     { firstName: 'Michael', lastName: 'Jackson', age: 51 },
//     { firstName: 'Noel', lastName: 'Gallagher', age: 50 },
// ];
// ReactDOM.render(<HelloPeople people={people}/>, app);