const User = (props: { name: string; age: number; isStudent: boolean }) => {
  return (
    <main>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.isStudent}</p>
    </main>
  );
};
export default User;
