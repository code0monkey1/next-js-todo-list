
import React from 'react'

type ToDoCardData={
            id:string,
            content:string,
            checked:boolean
            toggle:(id:string)=>void

}


const ToDoCard = (data:ToDoCardData) => {
   

  return (
    <div key={data.id}> 
          <div>{data.content}</div> 
          <span>
            <input onChange={()=>data.toggle(data.id)} type='checkbox' checked={data.checked}/>
         </span>
         </div>
  )
}

export default ToDoCard