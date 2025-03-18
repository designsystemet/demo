import { Link, Route, Routes } from 'react-router-dom';
import { ClimatePage, DigdirPage, HealthPage } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<NavPage />} />
        <Route path='digdir' element={<DigdirPage />} />
        <Route path='climate' element={<ClimatePage />} />
        <Route path='health' element={<HealthPage />} />
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
          <Link to='/digdir'>Digdir</Link>
        </li>
        <li>
          <Link to='/climate'>Climate</Link>
        </li>
        <li>
          <Link to='/health'>Health</Link>
        </li>
      </ul>
    </div>
  );
};

export default App;
