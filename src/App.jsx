import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./containers/HomePage/HomePage";
import AboutPage from "./containers/AboutPage/AboutPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default App;
