import React, { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css";


const Hooks = () => {
  const [count, setCount] = useState(1);

  return (
    <div classNameName='text-center'>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 12)}>
        Click me
      </button>
    </div>
);

}
export default Hooks;