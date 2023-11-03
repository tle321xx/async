import { useEffect, useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskButton from "./components/TaskButton";
import TaskList from "./components/TaskList";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedItem = localStorage.getItem("todos");
    // แปลงจาก string ให้เป็น JS obj
    const parsedItem = JSON.parse(savedItem);
    // ถ้าไม่มีข้อมูลให้มัน return เป็น array เปล่า
    return parsedItem || [];
  });
  const [data, setData] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // ถ้าเราทำแค่นี้จะเป็นได้ว่าพอเราลบ ในหน้าเว็บมันหายแต่ใน storage มันยังอยู่
    // เวลาเราลบเราจะต้องมีการดัก state ตัวที่มีการลบนั่นก็คือ todos
    // เพื่อเวลาที่เรามีการลบเราจะให้มัน rerender update component เป็นค่าล่าสุดของ todos
  }, [todos]);

  const onChange = (e) => {
    setData(e.target.value);
  };

  const addTask = () => {
    // นำ array มากระจายก่อนแล้วค่อยนำไปเพิ่ม
    let todosArray = [...todos];
    // เพิ่มค่า
    todosArray.push({
      todo: data,
      isCompleted: false,
    });
    // setTodos(todosArray);
    // "todos" คือชื่อ key และตอนที่เราจะเซตค่าเข้าไปจาก JS obj เป็น string
    localStorage.setItem("todos", JSON.stringify(todosArray));
    // เมื่อเราเพิ่มคำสั่งเราอยากให้หน้าเว็บ refresh โดยใช้คำสั่ง
    window.location.reload();
  };

  // console.log(todos)
  const deleteTodo = (index) => {
    let todosArray = [...todos];
    // index ที่เรารับมาคือ index ที่เราต้องการลบ 1 คือ จำนวน 1 ตัว
    todosArray.splice(index, 1);
    setTodos(todosArray);
  };

  const completeTodo = (index) => {
    let todosArray = [...todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTodos(todosArray);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask(data);
      // reset input ให้เป็น string เปล่า
      setData("");
    }
  };

  return (
    <>
      <TaskInput data={data} onChange={onChange} onKeyPress={onKeyPress} />
      <TaskButton onClick={addTask}>Submit</TaskButton>
      <hr />
      {/* todos? อ่านว่าถ้าหาก todos มีค่าจริง */}
      {todos?.map((todo, index) => (
        <TaskList
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))}
    </>
  );
}

export default App;
