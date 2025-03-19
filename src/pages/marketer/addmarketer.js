import React from "react";
import './addmarketer.css'
import { useSidebar } from "../../infoSidebar";
export default function Addmarketer() {
    const {isSidebarOpen} = useSidebar()
  return (
    <>
      <div className="fillterConteiner">

      <div className={!isSidebarOpen ? 'fillterWraper' : 'fillterWraper fillterWraperActive'}>

      </div>

      </div>
    </>
  );
}
