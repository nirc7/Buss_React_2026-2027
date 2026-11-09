

export default function FCPerson(props) {

  let num = props.id * 7;
  num++;
  console.log(num);
  
  //props.id=9; //ERR!

  function btnAddOne() {
    num++;
    console.log(num);
    
  }

  function chgNum(e) {
    console.log(e.target.value);
  }


  if (num < 10) {
    return (
      <div> {"<"} 100</div>
    );
  }

  return (
    <div style={{
      border: 'solid black 2px',
      margin: props.marLentg,
      padding: props.marLentg,
      borderRadius: 10
    }}>
      <h3>Person</h3>
      id= {props.id} <br />
      name={props.name} <br />
      num = {num} <br />
      <button onClick={btnAddOne} >add one</button> <br />
      <input type="text" onChange={chgNum} />
    </div>
  );
}