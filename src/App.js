import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import DetailUser from './pages/DetailUser';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/about" element={<About />} />
        {/* <PrivateRoute exact path="/about" component={About} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/users/:id" component={DetailUser} /> */}
      </Routes>
    </Router>
  );
}

export default App;
