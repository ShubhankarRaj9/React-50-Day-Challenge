import Counter from "./components/counter/Counter";
import Meals from "./components/meals/Meals";
import Todo from "./components/todo/Todo";
import Calculator from "./components/calculator/Calculator";
import ToggleBackgroundColor from "./components/toggleBackgroundColor/ToggleBackgroundColor";
import HiddenSearchBar from "./components/HiddenSearchBar/HiddenSearchBar";
import Testamonials from "./components/testamonials/Testamonials";
// import { accordionData } from "./content";
import Accordion from "./components/accordion/Accordion";
import "../src/components/accordion/index.css"
import Form from "./components/form/Form";
const App = () => {
  return <section>
    {/* <Counter/> */}
    {/* <Meals/> */}
    {/* <Todo/> */}
    {/* <Calculator/> */}
    {/* <ToggleBackgroundColor/> */}
    {/* <HiddenSearchBar/> */}
    {/* <Testamonials/> */}
    {/* <div className="accordion">
      {accordionData.map(({title,content}) => (
        <Accordion title={title} content={content} /> 
      ))}
    </div> */}
    <Form/>
  </section>;
}

export default App;
