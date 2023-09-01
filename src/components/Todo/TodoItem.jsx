import { useState } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import styles from "./TodoItem.module.scss";
import TodoForm from "./TodoForm";

function TodoItem({id,task,done,date,deleteTodo,editTodo}){ //วิธี 2 ** Recommend

    // const { task, done, date} = props; วิธี 1

    const [isOpenEditMode, setIsOpenEditMode] = useState(false);
    // console.log(id);

    const handleClickEdit = function () {
      // console.log(isOpenEditMode);
  
      setIsOpenEditMode(!isOpenEditMode);
    };

    const handleClickDelete = function (){
      deleteTodo(id);
    };

    const toggleStatus = () =>{
      const newTodoObj = {id,task,date,status:!done};
      editTodo(id, newTodoObj);
    };

    return (
        <>
            {isOpenEditMode ? (
          <TodoForm  textSubmit="Edit Task" setIsOpenForm={setIsOpenEditMode} editTodo={editTodo} oldTodo={{id,task,done,date}}></TodoForm>
        ) : (
          <li className={styles.todo}>
            <div
              className={`${styles.todo__checkbox} ${done ? styles.todo__checkbox__done : ''}`}
            >
              <HiOutlineCheck className={styles.todo__checkbox__icon} onClick={toggleStatus}/>
            </div>
            <p className={`${styles.todo__task} ${done ? styles.todo__task__done : ''}`}>
              {task}
            </p>
            <span className={styles.todo__date}>{date}</span>
            <div className={styles.todo__action}>
              <span onClick={handleClickEdit}>
                <FaPen className={styles.todo__edit} />
              </span>
              <span onClick={handleClickDelete}>
                <FaTrashAlt className={styles.todo__delete} />
              </span>
            </div>
          </li>
        )}
        </>
    );
}

export default TodoItem;