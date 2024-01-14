import Profile from './Profile';
import Home from './Home';
import Navigation from './Navigation';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
    return (
      <Router>
        <div>
        <nav className="nav-bar">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/profile">Profile</Link></div>
            <div><Link to="/navigation">Navigation</Link></div>
         </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    );
}
export default App;
