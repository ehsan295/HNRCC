import { Sidebar } from "@/components/crm-components/crm/sidebar";
import TopNav from "@/components/crm-components/crm/top-nav";
import CRMPage from "@/components/crm-components/page";
import { Outlet } from "react-router-dom";

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

export default Layout;
