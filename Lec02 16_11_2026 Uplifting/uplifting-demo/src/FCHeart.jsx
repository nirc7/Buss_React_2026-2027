

export default function FCHeart(props) {


    console.log('function runs...');

    return (
        <div style={{
            border: 'green solid 1px',
            margin: 10,
            padding: 10
        }}>size = {props.size}</div>
    );

}