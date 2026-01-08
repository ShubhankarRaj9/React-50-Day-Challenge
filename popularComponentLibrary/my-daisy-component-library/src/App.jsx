import { Fragment } from "react";
function App() {
  return (
    <fragment>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
      <input type="checkbox" value="synthwave" className="toggle theme-controller" />
    </fragment>
  );
}

export default App;
