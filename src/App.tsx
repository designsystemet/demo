import { HealthPage, DigdirPage, ClimatePage } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavPage />} />
        <Route path="digdir" element={<DigdirPage />} />
        <Route path="climate" element={<ClimatePage />} />
        <Route path="health" element={<HealthPage />} />
      </Routes>
    </div>
  );
}

const NavPage = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <p>Please select a page from the navigation.</p>
      <ul>
        <li>
          <a href="/digdir">Digdir</a>
        </li>
        <li>
          <a href="/climate">Climate</a>
        </li>
        <li>
          <a href="/health">Health</a>
        </li>
      </ul>
    </div>
  );
};

export default App;
