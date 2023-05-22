import './App.css';
import {React,useState,useRef} from 'react';

function App() {
  const inputRef = useRef(null);
  const [usdPrice, setusdPrice] = useState(0);
  const [results, setResults] = useState(0);

  function handleChange(e)
  {
  setusdPrice(e.target.value);
  };
  const handleSubmit = (e)=> {
    e.preventDefault();
    setResults ((results) => {
      const add = results + Number(inputRef.current.value) + 50;
      return <li>{add}</li>
      
    });
  
  };

  return (
    <div className="App">
      <fieldset>
      <h1>USD: {usdPrice} </h1>
      <h1>KSHS:{results}</h1>
      <ul>
        {handleSubmit}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="number" ref={inputRef} onChange={handleChange}V ></input>
        <button type="submit">Convert</button>
      </form>
      </fieldset>   
     </div>
  );
};
export default App;
