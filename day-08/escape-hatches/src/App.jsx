import CatFriends from "./components/CatFriends";
import Form from "./components/Form";
import StopWatch from "./components/StopWatch";
import UseRef from "./components/UseRef";

const App = () => {
  return <div>
    <UseRef/>
    <StopWatch/>
    <Form/>
    <hr />
    <CatFriends/>
  </div>;
};

export default App;
