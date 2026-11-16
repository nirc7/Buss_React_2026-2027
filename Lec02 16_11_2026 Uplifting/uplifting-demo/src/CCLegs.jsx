
import { Component } from 'react';

export default class CCLegs extends Component {


    btnSendData = () => {
        this.props.sendData(7);
    }

    render() {

        console.log('redner legs');


        return (
            <div style={{ border: 'blue solid 1px', margin: 10, padding: 10 }}>
                Legs <br />
                amount={this.props.amount} <br />
                <button onClick={this.btnSendData}>send Data 2 animal</button>
            </div>
        )
    }
}

