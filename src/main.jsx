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

const clerkPK = 'pk_test_cHJlc2VudC1nYXRvci01MC5jbGVyay5hY2NvdW50cy5kZXYk';

ReactDOM.createRoot(document.getElementById('root')).render(
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
);