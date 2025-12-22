import { Data } from "../../App"
const ComponentC = () => {
  return (
    <div>
        <Data.Consumer>
            {
                (name) =>{
                    return <h1>{name}</h1>
                }
            }
        </Data.Consumer>
    </div>
  )
}

export default ComponentC