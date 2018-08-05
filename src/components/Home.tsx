import * as React from 'react';

export interface HomeProps { name: string; age: number; };

export class Home extends React.Component<HomeProps, {}> {
    state = {};

    render(){
        return(
            <div>
                Hello there, {this.props.name}, your are this {this.props.age}, right?
            </div>
        );
    };
};