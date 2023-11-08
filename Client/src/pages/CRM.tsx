import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CRMPage from "@/components/crm-components/page";

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
      const getData = async () => {
        const responce = await authAxios.get("/projects");
      };
    }
  }, [accessToken]);
  return (
    <div>
      <CRMPage />
    </div>
  );
}

export default CRM;
