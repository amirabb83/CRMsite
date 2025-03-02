import React  from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import { SidebarProvider } from "./infoSidebar";
import { AuthProvider } from "./AuthContext";
import { AppRoutes } from "./AppRutes";


export default function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <div className="container">
          <AppRoutes/>
          <Sidebar />
        </div>
      </SidebarProvider>
    </AuthProvider>
  );
}