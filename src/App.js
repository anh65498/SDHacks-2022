import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SetupPage from "./pages/SetupPage/SetupPage";
import Result from "./pages/Result/ResultPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/setup" element={<SetupPage />} />
          <Route exact path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
