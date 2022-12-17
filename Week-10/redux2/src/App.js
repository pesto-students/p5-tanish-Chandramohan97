// import logo from "./logo.svg";
import "./App.css";
import StepCounter from "./stepCounter";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <StepCounter />;
      </div>
    </Provider>
  );
}

export default App;
