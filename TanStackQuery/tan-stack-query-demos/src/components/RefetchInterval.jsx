import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";


const fetchTodo = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!res.ok) throw new Error("Network was an error!...");
    return res.json();
}


const RefetchInterval = () => {
    const [currId, setCurrId] = useState(1);
    const { data, error, isLoading } = useQuery({
        queryKey: ["todo",currId],
        queryFn: () => fetchTodo(currId),
        refetchInterval:5000,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrId(prevId => prevId < 200 ? prevId + 1 : 1)
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <p>An error occured: {error.message}</p>
    return (
        <div>
            <h1>Todo</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button onClick={() => setCurrId(prevId => prevId < 200 ? prevId + 1 : 1)}>Next Todo</button>
        </div>
    )
}

export default RefetchInterval;