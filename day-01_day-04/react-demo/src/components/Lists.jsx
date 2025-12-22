import React from 'react'

const Lists = () => {
  const userInfo = [
    {
      username:"Huxn",
      email:"test@gmail.com",
      location:"USA"
    },
    {
      username:"John",
      email:"jd@gmail.com",
      location:"Arab"
    },
    {
      username:"Alex",
      email:"alexmersion@gmail.com",
      location:"India"
    },
  ]
  return (
    <main>
      {userInfo.map(({username,email,location})=>(
        <ul key={Math.random}>
          <li>{username}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
      ))}
    </main>
  );
}

export default Lists;