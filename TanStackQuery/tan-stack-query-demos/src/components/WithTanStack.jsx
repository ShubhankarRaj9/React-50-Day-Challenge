import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// tanstack query not only fetching the data but also manage the data.
const fetchData = async () => {
    // fetching the data with fetch method
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!res.ok) throw new Error("Network response was not okay!");
    return res.json();
};


// const fetchData = async () => {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
//     return res;
// }


const WithTanStack = () => {

    const {data,error,isLoading} = useQuery({
        queryKey: ["todos"],
        queryFn: fetchData,
    });

    if(isLoading) return <h1>Loading...</h1>
    if(error) return <p>An error occured: {error.message}</p>

    return (
        <div>
            <h1>Data</h1>
            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>
    );
};

export default WithTanStack;
