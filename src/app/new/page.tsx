import React from 'react'

const page = () => {
  
  async  function createToDo(){

   'use server'
  }

  return (
    <>
        <hr/>
             <form >
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