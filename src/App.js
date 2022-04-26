import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Registration from "./Pages/Login/Registration/Registration";
import Header from "./Pages/Shared/Header/Header";
import VolunteerReg from "./Pages/VolunteerReg/VolunteerReg";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/donation" element={<VolunteerReg />} />
      </Routes>
    </div>
  );
}

export default App;
