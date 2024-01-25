async function funcName(""){
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    var data = await response.json();
   
    }
    console.log(data)