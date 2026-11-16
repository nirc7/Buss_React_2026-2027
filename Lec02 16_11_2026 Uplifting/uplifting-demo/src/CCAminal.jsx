import { Component } from "react";
import FCHeart from "./FCHeart";
import CCLegs from "./CCLegs";



export default class CCAnimal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            color: 'red',
            legs: 2,
            sizeHeart:100
        };

    }


    btnSayHello = () => {
        this.setState(prevS =>
        ({
            nameStr: this.state.name,
            age: prevS.age + 1,
            legs: prevS.legs + 2
        }));
    }

    chgName = (e) => {
        this.setState({
            name: e.target.value,
            color: 'green',
            age: 30
        });


        //code ....
    }

    getData = (data) => {
        console.log(data);
        this.setState({sizeHeart: data});
    }

    render() {

        console.log('render');

        return (
            <div style={{ border: 'red solid 1px', margin: 10, padding: 10 }}>
                name={this.state.name} <br />
                color={this.state.color} <br />
                age={this.state.age} <br />
                {this.state.nameStr && <div>Hello {this.state.nameStr}</div>}
                <input type="text" onChange={this.chgName} /> <br />
                <button onClick={this.btnSayHello}>Say Hello</button>

                <FCHeart size={this.state.sizeHeart} amount={20} />
                <CCLegs amount={this.state.legs}  sendData={this.getData}/>
            </div>
        );

    }

}