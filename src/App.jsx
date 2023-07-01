import './static/css/main.css'; // All of our styles
import Main from './layouts/Main';
import useDowellLogin from "./useDowellLogin";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Index";

function App() {
  // useDowellLogin();

  return (
    // <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Index/>} />
        </Routes>
      </Router>
    // </div>
    
  );
}

export default App;
