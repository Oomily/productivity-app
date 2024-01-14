// import Profile from './Profile';
// import Home from './Home';
// import Navigation from './Navigation';
// import { useState, useEffect } from "react";

import './App.css';
import {Login} from "./pages/Login.js"
import {MainPage} from "./pages/MainPage.js"

import {
  BrowserRouter as Router,
  Route,
  // Switch,
  // Link,
  // Redirect,
  Routes
} from "react-router-dom";

function App(){

  return (
    <div>
      {/* <nav className="nav-bar">
          <div><Link to="/">Login</Link></div>
          <div><Link to="/profile">Profile</MainPage></div>
        </nav> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </div>
  );
}
export default App;

// function App() {
//     return (
//       <Router>
//         <div>
//         <nav className="nav-bar">
//             <div><Link to="/">Home</Link></div>
//             <div><Link to="/profile">Profile</Link></div>
//             <div><Link to="/navigation">Navigation</Link></div>
//          </nav>
//         </div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/navigation" element={<Navigation />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </Router>
//     );
// }
