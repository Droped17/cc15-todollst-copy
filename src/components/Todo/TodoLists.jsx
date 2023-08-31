import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";
import { useState } from "react";

function TodoLists() {

  const mockData = [
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
  const [allTodo,setAllTodo] = useState(mockData);

  const dataRender = allTodo.map((todoObj) => (
    <TodoItem
      key={todoObj.id}
      task={todoObj.task}
      done={todoObj.status}
      date={todoObj.due_date}
    ></TodoItem>
  ));

  const today = new Date();
  const options = { day: "numeric", weekday: "short", month: "short" };

  return (
    <>
      <ul className={styles.todo__lists}>
        {dataRender}
        {/* {mockData.map((todoObj)=><TodoItem key={todoObj.id} task={todoObj.task} done={todoObj.status} date={todoObj.due_date}></TodoItem>)} */}
        {/* <TodoItem task="Do HW" done={true} date='31 Aug'></TodoItem>
          <TodoItem task="Do HW2" done={false} date='31 Aug'></TodoItem>
          <TodoItem task="Do HW3" done={true} date='31 Aug'></TodoItem>
          <TodoItem task="Do HW4" done={false} date='31 Aug'></TodoItem> */}
      </ul>
    </>
  );
}

export default TodoLists;
