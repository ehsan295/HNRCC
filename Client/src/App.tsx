
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import CRM from "./pages/CRM";
import NotFound from './pages/NotFound'
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='*' element={<NotFound/>} />
    <Route path='/' element={<Signup/>} />  
      <Route path='/crm' element={<CRM/>} />  
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;


