type UserShape = {
  name: string;
  age: number;
  isStudent: boolean;
};

// interface UserShape {
//     name: string;
//     age: number;
//     isStudent: boolean;
// }

const ThirdApproach = ({ name, age, isStudent }: UserShape) => {
  return (
    <main>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{isStudent}</p>
    </main>
  );
};

 export default ThirdApproach;