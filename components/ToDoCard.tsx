
import React from 'react'

type ToDoCardData={
            id:string,
            content:string,
            checked:boolean

}


const ToDoCard = (data:ToDoCardData) => {
   

  return (
    <div key={data.id}> 
          <div>{data.content}</div> 
          <span>
            <input  type='checkbox' checked={data.checked}/>
         </span>
         </div>
  )
}

export default ToDoCard