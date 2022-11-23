import "./App.css";
import Header from "./compontents/Header/Header";
import "../src/compontents/main-styles/fonts/fonts.scss";
import "../src/compontents/Header/header.scss";
import "../src/compontents/main-styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<Header />} />
          <Route path="/men" element={<Header />} />
          <Route path="/women" element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
