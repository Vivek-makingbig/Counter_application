import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center',justifyContent:'center',justifySelf:'center',padding:'20px',marginTop: '150px', background:'#fab834', width:'300px', height:'280px'}}>
      <h2>Counter Application</h2>
      <h3>Count: {count}</h3>
      <button style={{ margin: '2px', background:'#8cdb32',height:'30px',border: 'none'}} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{ margin: '5px', background:'#8cdb32',height:'30px',border: 'none'}} onClick={() => setCount(0)}>Reset</button>
      <button style={{ margin: '5px', background:'#8cdb32',height:'30px',border: 'none'}} onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
