import logo from "./logo.svg";
import "./App.css";
import Toggle from "./Toggle";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Toggle />
      </div>
    </Provider>
  );
}

export default App;
