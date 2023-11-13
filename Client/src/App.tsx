import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import CRM from "./pages/CRM";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SucessSignup from "./auth/SucessSignup";
import { ThemeProvider } from "@/components/theme-provider";

import { Fragment } from "react";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/sucess" element={<SucessSignup />} />
            <Route path="/" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/crm" element={<CRM />} />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
