import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import PlantRegistrationSection from './components/PlantRegistrationSection.jsx';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/clerk-react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const clerkPK = 'pk_test_cHJlc2VudC1nYXRvci01MC5jbGVyay5hY2NvdW50cy5kZXYk';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={
        <>
  <ClerkProvider publishableKey={clerkPK}>
    <SignedIn>
      <NavBar />
      <App />
      <Footer />
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </ClerkProvider>,
        </>
      }/>
      <Route path='register' element={<PlantRegistrationSection/>}/>
    </Routes>
  </Router>
);