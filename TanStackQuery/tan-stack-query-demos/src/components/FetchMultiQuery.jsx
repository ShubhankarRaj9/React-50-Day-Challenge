import { useQueries } from "@tanstack/react-query";
import { useState } from "react"
const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) throw new Error("Network was an error occured");
    return response.json();
}
const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Network was an error occured");
    return response.json();
}



const FetchMultiQuery = () => {
    const [currTodoId, setCurrTodoId] = useState(1);
    const [currPostId, setCurrPostId] = useState(1);
    const results = useQueries({
        queries: [
            { queryKey: ["todos"], queryFn: fetchTodos },
            { queryKey: ["posts"], queryFn: fetchPosts }
        ]
    });
    const [todosQuery, postsQuery] = results;

    if (todosQuery.isLoading || postsQuery.isLoading) return <h1>Loading...</h1>

    if (todosQuery.error || postsQuery.error) {
        return (
            <div>
                An error occured:{" "}
                {postsQuery.error?.message || todosQuery.error?.message}
            </div>
        )
    };

    const todosData = todosQuery.data;
    const postsData = postsQuery.data;
    
    const handleNextTodoBtn = () => {
        setCurrTodoId((prevId) => Math.min(prevId+1,todosData.length))
    }
    const handleNextPostBtn = () => {
        setCurrPostId((prevId) => Math.min(prevId+1,postsData.length))
    }
    return (
        <div>
            <h1>Todos</h1>
            <pre>{JSON.stringify(todosData.find((todo) => todo.id === currTodoId), null, 2)}</pre>
            <button className="bg-teal-300 p-2 text-white" onClick={handleNextTodoBtn}>Next Todo</button>
            <br />
            <hr />
            <h1>Posts</h1>
            <pre>{JSON.stringify(postsData.find((post)=> post.id===currPostId),null,2)}</pre>
            <button className="bg-pink-700 p-2 text-white" onClick={handleNextPostBtn}>Next Post</button>
        </div>
    )
}

export default FetchMultiQuery