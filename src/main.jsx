import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';

const clerkPK = 'pk_test_ZGFzaGluZy1yYXR0bGVyLTY1LmNsZXJrLmFjY291bnRzLmRldiQ';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkPK}>
    <BrowserRouter>
      <SignedIn>
        <NavBar />
        <App />
        <Footer />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </BrowserRouter>
  </ClerkProvider>,
);
