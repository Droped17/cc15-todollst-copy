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

function TodoForm(props) {
  const [isError, setIsError] = useState(true);
  const [taskInput, setTaskInput] = useState("");

  // const titleError = function () {
  //   console.log(isError);
  //   setIsError(isError);
  // };

  const handelChangeInput = function(event){
    setTaskInput(event.target.value);
  }

  const handelSubmit = function (event) {
    event.preventDefault();



    //Form-Validation
    //case1 : submit ได้
    //case2 : submit ไม่ได้ => แสดง Error

    console.log("submit");
  };

  const handleCancel = function () {
    console.log("cancel");
    props.setIsOpenForm(false);
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
              text={props.textSubmit}
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
