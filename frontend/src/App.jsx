import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ScrollToTop from "./utilities/ScrolltoTop";
function App() {
  return (
    <>
      <div className="w-full">
        <Router>
          <ScrollToTop />
          <Routes>
            {/* <Route path="/dashboard" element={<Home />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            {/* <Route
              path="/details/:id"
              element={<ObservabilityDetails />}
            />{" "} */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
