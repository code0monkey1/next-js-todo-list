import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import ToDoCard from '../../components/ToDoCard';
export default async function Home() {
type ToDos = {
  id: string;
  content: string;
  checked: boolean;
};

const todos: ToDos[] =await (await axios.get('https://641fef8182bea25f6df72478.mockapi.io/api/v1/todos')).data||[]


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
