import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (<>
          <header className='flex justify-between items-center'> 
            <h1 className='text-2xl'>Todos</h1>
            <Link href='/new'>New</Link>
             </header>
          <ul>  </ul>     
        
        </>
  )
}
