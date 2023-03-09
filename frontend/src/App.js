import './App.css'
import Get from "./components/Get";
import Create from "./components/Create";
import Update from "./components/Update";
import Delete from "./components/Delete";

function App() {
  return (
    <div className="App">
      <Create />
      <Update />
      <Delete />
      <Get />
    </div>
  );
}

export default App;
