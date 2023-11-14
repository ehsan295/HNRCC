import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import CRM from "./pages/CRM";
import NotFound from "./pages/NotFound";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";
import TopNav from "./components/crm-components/crm/top-nav";
import { Sidebar } from "./components/crm-components/crm/sidebar";
import CRMPage from "./components/crm-components/page";
import TaskPage from "./pages/products/page";

function Layout() {
  return (
    <div>
      <TopNav />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
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
        element: <TaskPage />,
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
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
