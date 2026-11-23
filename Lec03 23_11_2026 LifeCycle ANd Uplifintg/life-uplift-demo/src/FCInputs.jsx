

export default function FCInputs(props) {

    let num1 = 0;
    let num2 = 0;

    const cngNum1 = (e) => {
        num1 = Number(e.target.value);

    }

    const cngNum2 = (e) => {
        num2 = Number(e.target.value);
    }

    const btnAdd = () => {
        props.sendNum(num1 + num2);
    }

    return (
        <div style={{ border: '2px blue solid', margin: 10, padding: 10, }}>
            <h4>Inputs</h4>
            NUM1: <input type="text" onChange={cngNum1} /> <br />
            NUM2: <input type="text" onChange={cngNum2} /> <br />
            <button onClick={btnAdd} >+</button>
        </div>
    )
}
