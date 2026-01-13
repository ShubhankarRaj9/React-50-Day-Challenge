import { useQuery } from "@tanstack/react-query";
import { useState } from "react"

const fetchTodos = async (page = 1,limit= 10) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/?$_page=${page}&_limit=${limit}`);
    if(!res.ok) throw new Error("Network response was not ok");
    return res.json();
}

const Pagination = () => {
    const [currPage,setCurrPage] = useState(1);
    const pageSize = 10;

      const {data, error, isLoading} =  useQuery({
            queryKey:['todos',currPage],
            queryFn:() => fetchTodos(currPage,pageSize),
        });

        if (isLoading) return <h1>Loading...</h1>
        if (error) return <p>An error occured: {error.message}</p>
        const handlePreviousPage = () => {
            setCurrPage((prevPage) => Math.max(prevPage-1,1));
        };
        const handleNextPage = () => {
            setCurrPage((prevPage) => prevPage+1);
        }
  return (
    <div>
        <h1>Todos</h1>
        <pre>{JSON.stringify(data,null,2)}</pre>
        <div>
            <button onClick={handlePreviousPage} disabled={currPage===1} className="bg-teal-300 w-20  justify-center">Previous</button>
            <button onClick={handleNextPage} disabled={currPage===pageSize} className="bg-purple-700 w-20" >Next</button>
        </div>
    </div>
  )
}

export default Pagination