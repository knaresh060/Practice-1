import React from "react";



function Student(props)
{
    return(

   <React.Fragment>
   {props.data.map((list)=>(
      <tr key={list.id}>
        <td>{list.name}</td>
        <td>{list.email}</td>
        <td>{list.mobile}</td>
        <td>{list.course}</td>
      </tr>
      
   ))}
   
 </React.Fragment>

    )
}
export default Student;