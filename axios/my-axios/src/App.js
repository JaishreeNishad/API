import {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [myData, setMyData] = useState([]) // we are using useState for storing data//

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts") // read data with the help of get method//
    .then((res)=>
         setMyData(res.data))
  },[])
  return (
    <div>
      <h1>Axios Tutorial...</h1>
      {myData.map((post)=>{
        const {id, title, body} = post; //dstructuring//

        return(
          <div  key={id}>
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
          
        )
      })}
      
    </div>
  );
}

export default App;
