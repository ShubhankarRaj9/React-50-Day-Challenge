import ThirdApproach from "./components/passingPropsInReact/ThirdApproach"
import User from "./components/User"

const App = () => {
  return (
    <section>
      <ThirdApproach name="alex" age={20} isStudent={true} />
    <User>
      <p>Hello</p>
    </User>
    </section>
  )
}

export default App