//import logo from './logo.svg';

import './App.css';
import Counter from "./Counter";
import React, { useState }from "react";

//const test =[0, 1, 2];

function App() {
 const[counters, cCounters] = useState([
    {id: 0 ,number: 0 },
    {id: 1 ,number: 0 },
    
]);

  const addCounter = () =>{
    cCounters((prevArray) => 
      [...prevArray,
        {id: prevArray.length, number: 0 },
        ]);
    };
    const removeCounter = () =>{
      cCounters((prevArray)=> prevArray.slice(0,prevArray.length - 1));
      }; 


      const globalReset = () => {
        const reset = counters.map((counterObj) => {
        return{id: counterObj.id, number: 0 };
        }); 
        cCounters(reset);
      };

     const incrementHandler =(id, arg)=>{
          const updated =counters.map((value)=>{
            if (value.id === id) {
              if (arg){
                return{id, number: value.number + 1};
              }else{
                return{id,number: 0} ;
              }
              
              //else reset object
            }
            return value;
              
          });
          cCounters(updated);
        };


      const generateCounters = () => {
        return counters.map((v) => {
          return(
           <Counter 
          key={v.id} 
          obj={v} 
          buttonHandler={() =>incrementHandler(v.id, true)}
          resetHandler={() =>incrementHandler(v.id, false)}
          />
        );
       });
       };
      
  return (
    <div className="App">
      <button onClick = {() => {
        addCounter();
      }}
      > 
      Add Counter
      </button>
      <button onClick = {()=> {
        removeCounter();
      }}
      > 
      Remove Counter
      </button>

      <button onClick = {() => {
        globalReset();
      }}
      > 
      Reset  all counters
      </button>
      
         {generateCounters()}
      </div>
   );
}

export default App;
