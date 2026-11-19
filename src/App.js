import './App.css';
import Student from './Student';
import { useState,useEffect } from 'react';


function App() {

  const[list,setlist]=useState([]);

  async function getdata() 
   {
    const response=await fetch("https://mymeeshoweb.onrender.com/getdatastudent");
     const list = await response.json();
     setlist(list);
     console.log(list);
   }
  
   useEffect(()=>
       {
         getdata();
       },[])
  
  return (
    <div>

<table border="1" cellpadding="10">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Course</th>
    </tr>
  </thead>

  <Student data={list} />
    
  </table>
    </div>
  );
}

export default App;
