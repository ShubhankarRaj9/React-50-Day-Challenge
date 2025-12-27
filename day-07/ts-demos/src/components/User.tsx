import type { ReactNode } from "react";

interface UserShape {
   children:ReactNode
}
const User = ({children }:UserShape) => {
  return (
    <div>
     <h1>{children}</h1>
    </div>
  );
};

export default User;
