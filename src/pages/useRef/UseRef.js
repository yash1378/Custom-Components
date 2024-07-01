import { useState, useEffect, useRef } from "react";

function UseRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default UseRef;

// import React, { useState, useEffect } from 'react';

// const UseRef = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [renderCount, setRenderCount] = useState(0);

//   useEffect(() => {
//     setRenderCount((prevCount) => prevCount + 1);
//   });

//   return (
//     <div>
//       <h2>Render Counter with useState</h2>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <p>Input Value: {inputValue}</p>
//       <p>Render Count: {renderCount}</p>
//     </div>
//   );
// };

// export default UseRef;
