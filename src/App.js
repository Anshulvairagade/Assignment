import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "./Pages/DetailsPage";
import CompanyDetailsPage from "./Pages/CompanyDetailsPage";
import CreatePage from "./Pages/CreatePage";
import CreateFormPage from "./Pages/CreateFormPage";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBar />
      <div style={{width: "85%"}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/details" element={<DetailsPage />} /> */}
          {/* <Route path="/companydetails" element={<CompanyDetailsPage />} /> */}
          <Route path="/createpage" element={<CreatePage />} />
          <Route path="/createform" element={<CreateFormPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
