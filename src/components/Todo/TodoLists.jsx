import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";
import { useState } from "react";

function TodoLists({allTodo}) {

  const dataRender = allTodo.map((todoObj) => (
    <TodoItem
      key={todoObj.id}
      id={todoObj.id}
      task={todoObj.task}
      done={todoObj.status}
      date={todoObj.due_date}
    ></TodoItem>
  ));

  return (
    <>
      <ul className={styles.todo__lists}>
        {dataRender}
        {/* {data.map((todoObj)=><TodoItem key={todoObj.id} task={todoObj.task} done={todoObj.status} date={todoObj.due_date}></TodoItem>)} */}
        {/* <TodoItem task="Do HW" done={true} date='31 Aug'></TodoItem>
          <TodoItem task="Do HW2" done={false} date='31 Aug'></TodoItem>
          <TodoItem task="Do HW3" done={true} date='31 Aug'></TodoItem>
          <TodoItem task="Do HW4" done={false} date='31 Aug'></TodoItem> */}
      </ul>
    </>
  );
}

export default TodoLists;
