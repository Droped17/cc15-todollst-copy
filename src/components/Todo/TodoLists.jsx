import { useState } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";

import styles from "./TodoLists.module.scss";
import TodoForm from "./TodoForm";

function TodoLists() {
  const [isOpenEditMode, setIsOpenEditMode] = useState(false);

  const handleClickEdit = function () {
    console.log(isOpenEditMode);

    setIsOpenEditMode(!isOpenEditMode);
  };

  return (
    <>
      <ul className={styles.todo__lists}>
        {isOpenEditMode ? (
          <TodoForm  textSubmit="Edit Task" setIsOpenForm={setIsOpenEditMode}></TodoForm>
        ) : (
          <li className={styles.todo}>
            <div
              className={`${styles.todo__checkbox} ${styles.todo__checkbox__done}`}
            >
              <HiOutlineCheck className={styles.todo__checkbox__icon} />
            </div>
            <p className={`${styles.todo__task} ${styles.todo__task__done}`}>
              todo-item 1{" "}
            </p>
            <span className={styles.todo__date}>30 Aug</span>
            <div className={styles.todo__action}>
              <span onClick={handleClickEdit}>
                <FaPen className={styles.todo__edit} />
              </span>
              <span>
                <FaTrashAlt className={styles.todo__delete} />
              </span>
            </div>
          </li>
        )}
      </ul>
    </>
  );
}

export default TodoLists;
