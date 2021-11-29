//import logo from './logo.svg';
import React from "react";


function Counter(props) {
    console.log(props);
  //count==== state variable
  //setCount===stateChanging function

  // const [count, setCount ] = useState(0);
   //const test = [0,1,2]
   //const [x,y,z] = test;

  //const buttonHandler = () => {
    //console.log(count);
    //to overwrite state variable to hard coded value use as below
    //setCount(1);
   //setCount((prevState)=>prevState+1);
   //setCount((prevState)=>{
     //return prevState +1
   //})
  //};
  //const resetHandler = () => {
    //setCount(0);
  //};

  return (
    <div className="counterContainer">
      <div className="tallyContainer">
        <h1>Tally Counter #{props.obj.id}</h1>
        <div className="number">{props.obj.number}</div>
        <br/>

       <button onClick={()=> props.buttonHandler()}>Increase Count</button>
       <button onClick= {()=> props.resetHandler()}>Reset</button>
      </div>
   </div>
   );
}

export default Counter;
