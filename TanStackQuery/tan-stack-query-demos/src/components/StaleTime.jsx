import { useQuery } from "@tanstack/react-query"
const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if(!res.ok) throw new Error("Network response was not okay!");
    return res.json();
}
const StaleTime = () => {
    const {data,error,isLoading} = useQuery({
        queryKey:["todo"],
        queryFn:fetchData,
        staleTime: 5000,
    });

    if(isLoading) return <h1>Loading...</h1>
    if(error) return <p>An error occured: {error.message}</p>

  return (
    <div>
        <h1>Data</h1>
        <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}

export default StaleTime