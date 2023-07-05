import axios from 'axios'
import { redirect } from 'next/navigation'
import React from 'react'

async  function createToDo(data:FormData){
   'use server'
  
   const title = data.get('title')

  const newNote = (await axios.post('https://641fef8182bea25f6df72478.mockapi.io/api/v1/todos',{
    content:title,
    important:true
  })).data

   console.log(newNote)
   
    redirect("/");
  }
const page = () => {



  return (
    <>
        <hr/>
             <form action={createToDo}>
             <div className='border-spacing-6 rounded text-lg'>
              Create New ToDo
             </div>
             <span className='p-5'>Input : </span>
             <input className='m-5' type='text' name='title'/>
             <button type='submit'>Submit</button>
             </form>
             <hr/>
    </>
  )
}

export default page