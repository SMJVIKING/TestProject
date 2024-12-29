import "./App.css";
import Header from "./Components/Header";
import Home from "./components/Home";
import Sidebar from "./Components/Sidebar";
import "./index.css";

function App() {
  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-full 2xl:w-3/4 2xl:ml-32">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
