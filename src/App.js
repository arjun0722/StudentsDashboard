import "./App.css";
import Sidebar from "./Sidebar";
import Center from "./Center";


function App() {
  return (
    <div className="app">
      <div className="app__body">
        <div class="sidebar--main">
          <Sidebar />
        </div>
        <div class="center--container">
          <Center />
        </div>
      </div>
    </div>
  );
}

export default App;
