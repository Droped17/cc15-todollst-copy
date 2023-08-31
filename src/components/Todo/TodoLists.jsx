
import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";

function TodoLists() {

  return (
    <>
      <ul className={styles.todo__lists}>
          <TodoItem task="Do HW" done={true} date='31 Aug'></TodoItem>
          <TodoItem task="Do HW2" done={false} date='31 Aug'></TodoItem>
          <TodoItem task="Do HW3" done={true} date='31 Aug'></TodoItem>
          <TodoItem task="Do HW4" done={false} date='31 Aug'></TodoItem>
      </ul>
    </>
  );
}

export default TodoLists;
