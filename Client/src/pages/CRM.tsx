import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CRMPage from "@/components/crm-components/page";
import { Sidebar } from "@/components/crm-components/crm/sidebar";
import { UserNav } from "@/components/crm-components/crm/user-nav";
import TopNav from "@/components/crm-components/crm/top-nav";

function CRM() {
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
        <CRMPage />
      </div>
    </div>
  );
}

export default CRM;
