
import axios from 'axios';
import Link from 'next/link';
import ToDoCard from '../../components/ToDoCard';


export default async function Home() {
  
type ToDos = {
  id: string;
  content: string;
  checked: boolean;
};



const todos: ToDos[] = (await axios.get('https://641fef8182bea25f6df72478.mockapi.io/api/v1/todos')).data||[]

 

  return (<>
          <header className='flex justify-between items-center'> 
            <h1 className='text-2xl'>Todos</h1>  
             </header>
             <hr/>
             <Link className='border-spacing-6 rounded text-lg' href='/new'>
              Create New ToDo
             </Link>
          
             <hr/>
          <ul className='pl-4'>{
          todos.map(t => <ToDoCard   key={t.id} {...t} />)
         }  
         
         </ul>     
        
        </>
  )
}
