import Image from 'next/image';
import Link from 'next/link';
import ToDoCard from '../../components/ToDoCard';

export default async function Home() {
type ToDos = {
  id: string;
  content: string;
  checked: boolean;
};

const todos: ToDos[] =[]


  return (<>
          <header className='flex justify-between items-center'> 
            <h1 className='text-2xl'>Todos</h1>
            <Link href='/new'>New</Link>
             </header>
          <ul className='pl-4'>{
          todos.map(t => <ToDoCard key={t.id} {...t} />)
         }  
         
         </ul>     
        
        </>
  )
}
