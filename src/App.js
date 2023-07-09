import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Country from "./pages/Country/Country";
import City from "./pages/City/City";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:countientId" element={<Country />} />
        <Route path="/cities/:country/:countryId" element={<City />} />
      </Routes>
    </div>
  );
}

export default App;
