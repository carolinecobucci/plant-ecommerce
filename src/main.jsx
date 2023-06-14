import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

const clerkPK = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(

    <ClerkProvider publishableKey={clerkPK}>
      <SignedIn>
        <NavBar />
        <App />
        <Footer />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>

);
