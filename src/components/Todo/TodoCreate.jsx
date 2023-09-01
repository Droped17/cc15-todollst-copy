import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";


import TodoForm from "./TodoForm";
import styles from "./TodoCreate.module.scss";

/* 
  Condition Rendering
  -Default : Show button & Text
  -Active : Show TodoForm

  Concept: true ? <AddTask/> : <TodoForm></TodoForm>
*/

/* 
  CC2 - Event Handling
  เอา fn ไปผูกกับ UI เพื่อให้ user เป็นคนเรียกใช้เอง
  - onClick : ต้อง click ก่อน fn ถึงจะ run
  - Browser จะเรียกใช้ fn แล้วโยน eventObj มาให้
      handleClick(eventObject)
  
*/

/* 
  Array Destructoring

  function myUseState(){
    return [5,9];
  }

  let [a,b] = myUseState()
  a == 5
  b == 9

*/


/* 
  CC3 - Js value ไม่สามารถทำให้ react re-render ได้
  ต้องใช้ state

  ReactState เป็น 1 ใน fn ของ ReactHook
  const [state,setState] = userState(initialState:any)

  เมื่อ state เปลี่ยน FN-Component จะ Re-render
  Re-render == Code ทั้งหมดใน FN-Component จะ run ใหม่อีกครั้งนึง
*/


function TodoCreate({setTodo,allTodo,addTodo}) {
        //state    setState
 const [isOpenForm,setIsOpenForm] = useState(false);

  const handleClick = function (){
    setIsOpenForm(!isOpenForm);
  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit="Add Task" setIsOpenForm={setIsOpenForm} setTodo={setTodo} allTodo={allTodo} addTodo={addTodo}></TodoForm>
      ) : (
        <div onClick={handleClick} className={styles.todo__create}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;
