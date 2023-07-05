import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
type ToDos = {
  id: string;
  content: string;
  checked: boolean;
};

const todos: ToDos[] = [];

for (let i = 1; i <= 12; i++) {
  const todo: ToDos = {
    checked: true,
    content: `Todo ${i}`,
    id: i.toString(),
  };

  todos.push(todo);
}

  return (<>
          <header className='flex justify-between items-center'> 
            <h1 className='text-2xl'>Todos</h1>
            <Link href='/new'>New</Link>
             </header>
          <ul className='pl-4'>{todos.map(t => <div key={t.id}> <div>{t.content}</div> <span><input type='checkbox' checked={t.checked}/> </span></div>)}  </ul>     
        
        </>
  )
}
