import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Sidebar from "./components/sidebar/sidebar";
import { SidebarProvider } from "./infoSidebar";
import Login from './pages/login/login'
export default function App() {
  let Routes = useRoutes(routes);
  return (
    <>
      <SidebarProvider>
        <div className="container">
          <Login/>
          {/* {Routes} */}
          {/* <Sidebar /> */}
        </div>
      </SidebarProvider>
    </>
  );
}
