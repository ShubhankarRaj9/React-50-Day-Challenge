import { type ReactNode } from "react";

type Shape = {
    children:ReactNode
}
const User = ({children}:Shape) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default User