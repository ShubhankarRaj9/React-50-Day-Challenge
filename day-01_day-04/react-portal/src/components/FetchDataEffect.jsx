import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {

    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    }

    getData();
  }, []);
  return (
    <div>
      <h1>First Post Title: </h1>
      {data.length>0 ? <h2>{data[0].title}</h2>: <p>Loading...</p> }
    </div>
  );
};

export default FetchDataEffect;
