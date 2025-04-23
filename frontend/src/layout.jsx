import { useEffect } from "react";
import Topbar from "./topbar";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();
//   useEffect(() => {
//     if(document.cookie==""){
//       navigate("/Login")
//     }
// 
//   },[])
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  );
}

export default Layout;