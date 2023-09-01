import { nanoid } from "nanoid";

import styles from "./TodoForm.module.scss";
import { Button } from "../Common/Button/Button";
import { useState } from "react";

/* 
  CC-1 : Form Handle
  - นำ fn ไปผูกกับ onSubmit
  - FN จะถูก browser เรียกใช้เมื่อ ? โดยส่ง parameter มา 1 ตัวคือ (eventObj)
  - default คือ ทุกปุ่มใน <form></form> จะทำหน้าที่ submit
  - วิธีแก้ คือกำหนด type ของปุ่ม 
      - type = 'submit'
      - type = 'button' ตัว button จะไม่ submit

*/

/* 
  props = {
    textSubmit = string,
    setIsOpenForm : FN
  };

*/

function TodoForm({setIsOpenForm,textSubmit,setTodo,allTodo}) {
  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  // const titleError = function () {
  //   console.log(isError);
  //   setIsError(isError);
  // };

  const handelChangeInput = function(event){
    if (isError) {
      setIsError(false);
    }
    setTaskInput(event.target.value);
    
  }

  const handelSubmit = function (event) {
    event.preventDefault();

    // ต้องรู้ว่า user พิมพ์อะไร (อยู่ใน state : taskInput)

    if (taskInput.trim() === '') {
      console.log('Error');
      setIsError(true);
      return;
    }
    //Form-Validation
    //case1 : submit ได้
    //case2 : submit ไม่ได้ => แสดง Error

    console.log('submit === create new Todo');
    // create NewTodo
    // 1- ส่ง request ไปหลังบ้านเพื่อ save ลง database
    // 2- ทำการ update State ของ AllTodo == React ทำการ Re-render
    // data = [];
    // data = [{id:number,task:string,status:boolean,due_date:YYY--MM--DD}]

    const newTodo = {id:nanoid() ,task: taskInput, status: false, due_date: '22'}
    const newTodoList = [newTodo,...allTodo];
    
    setTodo(newTodoList);
    setIsOpenForm(false);
    
  };

  const handleCancel = function () {
    console.log("cancel");
    setIsOpenForm(false);
  };

  return (
    <>
      <form className={styles.todo__form__container} onSubmit={handelSubmit}>
        {/*	Body */}
        <input className={styles.todo__form__input} placeholder="Task Name" onChange={handelChangeInput} value={taskInput}/>
        {/*Form Footer */}
        <div className={styles.todo__form__footer}>
          {isError ? (
            <p className={styles.todo__error}>Title is required</p>
          ) : null}
          <div className={styles.todo__form__buttons}>
            <Button
              text="Cancel"
              active={false}
              type="button"
              onClick={handleCancel}
            ></Button>
            <Button
              text={textSubmit}
              active={true}
              type="submit"
            ></Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
