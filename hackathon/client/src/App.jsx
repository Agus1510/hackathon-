import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/login/login";
import { useDispatch } from "react-redux";
import Home from "./components/home/home";
import Register from "./register/register";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dispatch, pathname]);

  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={
              <div className="page">
                <Home />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="page">
                <Login />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div className="page">
                <Register />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
