// import useAuthStore from "@/providers/auth-provider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { NoTeamSpaces } from "@/components/dasboard/NoTeamSpaces";

const DashBoard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <NoTeamSpaces />
      </div>
    </>
  );
};

export default DashBoard;
