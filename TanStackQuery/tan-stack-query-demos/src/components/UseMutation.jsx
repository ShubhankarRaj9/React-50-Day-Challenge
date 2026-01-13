import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react";

const postTodo = async (newTodo) =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newTodo),
    });
    if(!res.ok) throw new Error("Network response was not ok");
    return res.json();
}

const UseMutation = () => {
    const queryClient = useQueryClient();
    const [title, setTitle] = useState("");
    const {error, mutate} = useMutation({
        mutationFn: postTodo,
        onSuccess: () => {
            queryClient.invalidateQueries(["todos"]);
        },
    });

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(title.trim() === "") return;
        // Mutate our data
        mutate({title,completed:false});
        setTitle("");
    };
    return (
        <div>
            <h1>Create new todo</h1>
            <form onSubmit={handleSubmit}>
                <input
                 className="border"
                 type="text" 
                 value={title} 
                 onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Todo Title"
                />
                <button type="submit" className="bg-black text-white">{
                    status ==="pending"?"Adding...":"Add Todo"
            }</button>
            {
                error && <h1>An Error Occured: {error.message}</h1>
            }
            {
                status==='success' && <h1>Todo Added Successfully</h1>
            }
            </form> 
        </div>
    )
}

export default UseMutation