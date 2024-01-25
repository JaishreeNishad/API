import {useEffect} from 'react';
import './App.css';
import axios from "axios";

function App() {

  

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts") // read data with the help of get method//
    .then((res)=>{
         console.log(res)
    })
  },[])
  return (
    <div>
      <h1>Axios Tutorial...</h1>
      
    </div>
  );
}

export default App;
