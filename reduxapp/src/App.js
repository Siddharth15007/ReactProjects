import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Shop />
      </div>
    </>
  );
}

export default App;
