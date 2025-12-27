import { useState } from "react";
import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";
import type { Info, AdminInfoList } from "./types";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";
function App() {
  const [count,setCount] = useState<number>(0);

  const Increment = () =>{
    setCount((prevCount) => prevCount+1);
  }
  const user: Info = {
    id: 1,
    name: "John Doe",
    email: "HuXn@gmail.com",
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "Jane Smith",
    email: "jane@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={Increment}>Increment</button>
      </div>
      <UserProfile/>
      <TodoList/>
    </>
  );
}

export default App;
