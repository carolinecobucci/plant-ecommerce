import "./App.css";

import { Route, Routes } from "react-router-dom";

import AboutUs from "./components/AboutUsPage/AboutUsPage.jsx";
import PlantRegistrationSection from "./components/PlantRegistrationSection";
import Home from "./components/Home/Home";
// import Plants from "./components/product-page/Plants"
import SelectPlant from "./components/product-page/SelectedPlant"


function App() {
  return (
    <div>
      
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<PlantRegistrationSection />} />
          <Route path="/products/:id" element={<SelectPlant/>} />
          <Route path="/aboutUs" element={<AboutUs />} />
          
        </Routes>
      
    </div>
  );
}

export default App;
