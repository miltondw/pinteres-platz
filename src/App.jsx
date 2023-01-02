import { GridCard } from "./components/GridCard";
import { Navbar } from "./components/Navbar";
import "./normalize.css";
import "./index.css";
function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar />
      <GridCard />
    </div>
  );
}

export default App;
