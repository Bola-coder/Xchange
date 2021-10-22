import "./App.css";
import { InputProvider } from "./components/InputContext";
import InputForm from "./components/InputForm";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <div className="app-text">
        <h1>Xchange.io</h1>
        <em>Your Number one currency coverter</em>
      </div>
      <InputProvider>
        <InputForm />
        <Result />
      </InputProvider>
    </div>
  );
}

export default App;
