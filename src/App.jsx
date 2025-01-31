import { Routes, Route, Link } from "react-router-dom";
import Red from "./Components/Red/Red";
import Blue from "./Components/Blue/Blue";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="Blue">Blue</Link>
          <Link to="Red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
