import { Component } from 'react';
import FCInputs from './FCInputs';
import FCResulut from './FCResulut';

export default class CCMyApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 0
        };
    }


    getNum = (numData) => {
        this.setState({num : numData});
    }

    render() {
        return (
            <div style={{
                border: '2px red solid',
                margin: 10,
                padding: 10,
                display: 'flex',

            }}>
                <FCInputs sendNum={this.getNum} />
                <FCResulut num={this.state.num} />
            </div>
        )
    }
}
