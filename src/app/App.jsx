// Dependencies
import './App.scss';
import AppBar from '../components/Common/AppBar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoLists from '../components/Todo/TodoLists';
import { Button } from '../components/Common/Button/Button';

import { useState } from 'react';

function App() {
  const data = [
    {
      id: 1,
      task: "Suspendisse potenti.",
      status: false,
      due_date: "2023-04-26",
    },
    {
      id: 2,
      task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      status: false,
      due_date: "2023-05-08",
    },
    {
      id: 3,
      task: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
      status: false,
      due_date: "2023-04-30",
    },
  ];
    // CRUD = Create-Read-Update-Delete
    const [allTodo,setAllTodo] = useState(data);

  return (
    <div className='todo'>
      <div className='todo__header'>
        <AppBar />
      </div>
      <div className='todo__sidebar'>
        <SideBar />
      </div>
      <div className='todo__content'>
        <main className='todo__container'>
          <TodoHeader />
          <TodoCreate setTodo={setAllTodo} allTodo={allTodo}/>
          <TodoLists allTodo={allTodo}/>
        </main>
      </div>
    </div>
  );
}

export default App;
