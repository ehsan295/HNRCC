import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

import CRMPage from "./components/crm-components/page";
import ProductPage from "./pages/products/ProductPage";

import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound";
import Machinery from "./pages/machinery/Machinery";
import Expenses from "./pages/expenses/Expenses";
import Employees from "./pages/employees/Employees";
import Debts from "./pages/debts/Debts";
import Customers from "./pages/customers/Customers";
import ConfreanceRoom from "./pages/conferance-room/ConfreanceRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CRMPage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/machinery",
        element: <Machinery />,
      },
      {
        path: "/expenses",
        element: <Expenses />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/debts",
        element: <Debts />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/conferance",
        element: <ConfreanceRoom />,
      },
    ],
  },

  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
