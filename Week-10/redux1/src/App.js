import logo from "./logo.svg";
// import './App.css';
import Toggle from "./Toggle";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <div className="App">
      <Toggle />
    </div>
  );
}

export default App;
