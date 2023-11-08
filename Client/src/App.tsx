import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import CRM from "./pages/CRM";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SucessSignup from "./auth/SucessSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Signup />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/sucess" element={<SucessSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
