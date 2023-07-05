import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  type ToDos ={
    id:string,
    content:string,
    checked:boolean
  }  
  const todos:ToDos[]=[
      {
        checked:true,
        content:"hello",
        id:'1'
      }
    ]
  return (<>
          <header className='flex justify-between items-center'> 
            <h1 className='text-2xl'>Todos</h1>
            <Link href='/new'>New</Link>
             </header>
          <ul className='pl-4'>  </ul>     
        
        </>
  )
}
