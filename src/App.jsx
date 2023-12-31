import './App.css';

import { Route, Routes } from 'react-router-dom';

import AboutUs from './components/AboutUsPage/AboutUsPage.jsx';
import PlantRegistrationSection from './components/PlantRegistrationSection';
import Home from './components/Home/Home';
// import Plants from "./components/ProductPage/Plants"
import SelectedPlant from './components/ProductPage/SelectedPlant';
import AllPlants from './components/AllPlants/AllPlants';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<PlantRegistrationSection />} />
        <Route path="/products" element={<AllPlants />} />
        <Route path="/products/:id" element={<SelectedPlant />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
