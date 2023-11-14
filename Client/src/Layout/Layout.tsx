import { Sidebar } from "@/components/crm-components/crm/sidebar";
import TopNav from "@/components/crm-components/crm/top-nav";
import { Outlet } from "react-router-dom";
import Cards from "@/components/crm-components/crm/cards";

function Layout() {
  return (
    <div>
      <TopNav />
      <div className="flex">
        <Sidebar />
        <Cards />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
