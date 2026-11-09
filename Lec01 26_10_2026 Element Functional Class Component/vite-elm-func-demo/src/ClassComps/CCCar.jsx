import { Component } from "react";


export default class CCCar extends Component {
  constructor(props) {
    super(props);

    let number = 7; //local var
    this.num = props.speed + 5; //field

    this.state = {
      year: props.id * 1000,
      color: 'red',
      showCol: true
    };
  }

  btnAddOne = () => {
    this.num++;
    console.log(this.num);

    console.log(this.state.year);
    //this.state.year++; // ERROR!!!

    // this.setState({
    //   year: 3000
    // });

    // this.setState({
    //   color: 'green',
    //   age: 50
    // });

    // this.setState({ year: this.state.year + 1 });
    // this.setState({ year: this.state.year + 1 });


    this.setState(prevS => ({ year: prevS.year + 1 }));
    this.setState(prevS => ({ year: prevS.year + 1 }));

    console.log(this.state.year);
  }

  chNum = (e) => {
    console.log(e.target.value);
  }


  btnToggle = () => {
    this.setState({ showCol: !this.state.showCol });
  }

  render() {

    console.log('render ', this.state.year);

    return (
      <div>
        <h3>Car</h3>
        id={this.props.id} <br />
        model = {this.props.model} <br />
        speed = {this.props.speed} <br />
        this.num = {this.num} <br />
        this.state.year = {this.state.year} <br />
        {this.state.showCol && <div> this.state.color = {this.state.color}<br /> </div>}
        this.state.age = {this.state.age} <br />

        <button onClick={this.btnAddOne} >Add One</button> <br />
        <button onClick={this.btnToggle} >Togg</button> <br />
        <input type="text" onChange={this.chNum} />
      </div>
    );
  }
}