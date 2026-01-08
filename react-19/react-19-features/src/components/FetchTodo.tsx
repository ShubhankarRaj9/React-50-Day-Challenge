import { use } from "react";

const todoPromise = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
  (res) => res.json()
);

const FetchTodo = () => {
  const data = use(todoPromise);
  return (
    <div>
      {data.title}
    </div>
  );
};

export default FetchTodo;
