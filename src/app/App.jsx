// Dependencies
import './App.scss';
import AppBar from '../components/Common/AppBar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoLists from '../components/Todo/TodoLists';
import { Button } from '../components/Common/Button/Button';

import { nanoid } from 'nanoid';
import dayjs from 'dayjs';

import { useState } from 'react';

function App() {
  // console.log(dayjs().format('YYYY-MM-DD'));

  const data = [
    {
      id: nanoid(),
      task: "Suspendisse potenti.",
      status: false,
      due_date: dayjs().format('YYYY-MM-DD'),
    },
    {
      id: nanoid(),
      task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      status: false,
      due_date: dayjs().format('YYYY-MM-DD'),
    },
    {
      id: nanoid(),
      task: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
      status: false,
      due_date: dayjs().format('YYYY-MM-DD'),
    },
  ];
    // CRUD = Create-Read-Update-Delete
    const [allTodo,setAllTodo] = useState(data);


    const addTodo = function(task){
        const newTodo = {
          id: nanoid(),
          task: task,
          status: false,
          due_date: "2023-09-01",
        };

        setAllTodo((old) => [newTodo,...old]);
    };

    
    const deleteTodo = function (itemId){

      let foundIndex = allTodo.findIndex((todoObj)=> todoObj.id === itemId);
      console.log(foundIndex);

      //วิธีที่ 1
      // if (foundIndex !== -1) {
      //     const newTodoLists = [...allTodo]; //return ตัวที่ถูกลบ 
      //     newTodoLists.splice(foundIndex,1);
      //     setAllTodo(newTodoLists);
      // };

      //วิธีที่ 2
      // const newTodoLists = allTodo.filter((todoObj) => todoObj.id !== itemId);
      // setAllTodo(newTodoLists);

      //วิธีที่ 3
      setAllTodo(old=> old.filter((todoObj) => todoObj.id != itemId));  
    } 

    const editTodo = function (itemId,newTodo){
      // console.log(itemId,newTodo);

      // LOGIC
      // OPTION 1:
      // let foundTodo = allTodo.find((todo)=> todo.id == itemId);
      // // console.log(foundTodo);
      // if (!foundTodo) return;

      // const newTodo = Object.assign({},foundTodo,newTodo);
      // console.log(newTodo);

      // let foundIndex = allTodo.findIndex((todo) => todo.id === itemId);
      // if (foundIndex === -1) {
      //   return;
      // }
      // const newTodoList = [...allTodo];
      // newTodoList.splice(foundIndex,1,newTodo);
      // setAllTodo(newTodoList);

      // OPTION 2:
      // const newTodoList = allTodo.map(function(todo){
      //   if (todo.id != itemId) {
      //       return todo;
      //   } else{
      //     return {...todo,...newTodo};
      //   }
      // });

      
      // setAllTodo(newTodoList);

      // OPTION 3:
      const newTodoList = allTodo.reduce((acc,todo)=>{
        if (todo.id !== itemId) {
          acc.push(todo);
        }
        else{
          acc.push({...todo,...newTodo});
        }
        return acc;
      },[]);

      setAllTodo(newTodoList);

    };
 

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
          <TodoCreate addTodo={addTodo}/>
          <TodoLists allTodo={allTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </main>
      </div>
    </div>
  );
}

export default App;
