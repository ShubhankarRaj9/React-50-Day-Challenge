const User = ({
  name,
  age,
  isStudent,
}: {
  name: string;
  age: number;
  isStudent: boolean;
}) => {
  return (
    <main>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{isStudent}</p>
    </main>
  );
};

export default User;