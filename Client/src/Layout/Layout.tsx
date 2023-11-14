import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import TopNav from "@/components/crm-components/crm/top-nav";
import { Sidebar } from "@/components/crm-components/crm/sidebar";
import Cards from "@/components/crm-components/crm/cards";

export default function Layout() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");
  useEffect(() => {
    if (accessToken == null) {
      navigate("/signin");
    } else {
      const apiURL = "http://localhost:5000/api/v1";
      const authAxios = axios.create({
        baseURL: apiURL,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }
  }, [accessToken]);
  return (
    <div>
      <TopNav />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col my-6 ml-6 mr-4 w-full">
          <Cards />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
