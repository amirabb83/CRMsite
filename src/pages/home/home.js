import React from "react";
import "./home.css";
import { useSidebar } from "../../infoSidebar";

import { informationreport } from "./../../datas";
import Chart from "../../components/recharts/recharts";
import Infouser from "../../components/infouser/infoUser";
export default function Home() {
  const { isSidebarOpen } = useSidebar();
  return (
    <>
      <div
        className={
          isSidebarOpen ? "homeContainer activehome  " : "homeContainer"
        }
      >
        <>
          <div className="containerReports">
            {informationreport.map((user) => (
              <div className={`containerreport item-${user.id - 1}`}>
                <div className="svgright">{user.icon}</div>
                <div className="inforeport">
                  <h2 className="titleReport">{user.title}</h2>
                  <h3 className="CountReport">{user.count}</h3>
                </div>
              </div>
            ))}
          </div>
        </>
      </div>

      <div
        className={
          isSidebarOpen
            ? "containerinformation containerinformation-active "
            : "containerinformation"
        }
      >
        <div class="infouser">
          <Infouser />
        </div>
        <div className="chart">
          <Chart />
        </div>
      </div>
    </>
  );
}
