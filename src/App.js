import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddEvent from "./Pages/Events/AddEvent/AddEvent";
import Events from "./Pages/Events/Events/Events";
import VolunteerList from "./Pages/Events/VolunteerList/VolunteerList";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Registration from "./Pages/Login/Registration/Registration";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import VolunteerReg from "./Pages/VolunteerReg/VolunteerReg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddedCategory from "./Pages/Profile/AddedCategory/AddedCategory";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<AddedCategory />} />
        <Route
          path="/donation/:categoryId"
          element={
            <RequireAuth>
              <VolunteerReg />
            </RequireAuth>
          }
        />
        <Route path="/events/" element={<Events />}>
          <Route path="volunteer-list" element={<VolunteerList />} />
          <Route path="addevent" element={<AddEvent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
