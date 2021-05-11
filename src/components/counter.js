import React, { useState } from 'react';

const Counter = () => {

  const [count, setCount] = useState(100); // [stateValue, stateFunction]

  const iterCount = () => {
    setCount(count + 1);
  }

  const deiterCount = () => {
    setCount(count - 1);
  }

  const iterByAmount = (num) => {
    setCount(count + num);
  }



  return ( 
    <div className="counter">
      <div>{ count }</div>
      <div>
        <button onClick={ iterCount }>+</button>
        <button onClick={ deiterCount }>-</button>
      </div>
      <div>
        <button onClick={ () => iterByAmount(5) }>+5</button>
        <button onClick={ () => iterByAmount(-5) }>-5</button>
      </div>
    </div>
  );
}

export default Counter;