import "./sidebar.css";
import { SlUser } from "react-icons/sl";
import { LuSquareDashed } from "react-icons/lu";
import { SlArrowLeft } from "react-icons/sl";
import { CiShare2 } from "react-icons/ci";
import { GoTasklist } from "react-icons/go";
import { FaHandshake } from "react-icons/fa6";
import { PiUsersThreeBold } from "react-icons/pi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSidebar } from "../../infoSidebar";
export default function Sidebar() {
  const {isSidebarOpen, toggleSidebar}  = useSidebar()
  return (
    <>
      <div class="navbar">
        <div className="navbarWraper">
          <div
            className={
              !isSidebarOpen ? "navbarRight" : "navbarRight navbarRight-active"
            }
            onClick={toggleSidebar}
          >
          {!isSidebarOpen ? (
            <RxHamburgerMenu className="hamicon" />
          ):(
            <img src="/burger-list-menu-navigation-svgrepo-com.svg" alt="" className="hamicon" />
          )}
            
          </div>
          <div className="navbarLeft">
            <span>
              <LuSquareDashed className="imgnavbar" />
            </span>
          </div>
        </div>
      </div>

      <div className={isSidebarOpen ? "sidebar-active sidebar " : "sidebar"}>
        <div class="sidebarwraper">
          <div class="sidebarimg">
            <img className="zimpndsidebar" src="/dashbordtitle.jpg" alt="" />
          </div>
          <div class="sidebarmenue">
            <div class="sidebarlist">
              <ul>
                <li class=" dashbord">
                  <MdOutlineDashboardCustomize />
                  داشبورد
                </li>
                <hr className="hrdishbord" />

                <div className="containerlis">
                  <div class="mainli">
                    <li class="sidebarlistitem ">
                      <SlUser className="sidebaricons" />
                      مدیریت بازاریابان
                      <SlArrowLeft className="openIcon" />
                    </li>
                  </div>
                  <div class="secli">
                    <li>افزودن بازاریاب</li>
                    <li>مدیریت بازاریابان</li>
                  </div>
                </div>

                <div className="containerlis">
                  <div class="mainli">
                    <li class="sidebarlistitem">
                      <CiShare2 className="sidebaricons" />
                      سرنخ های من
                      <SlArrowLeft className="openIcon" />
                    </li>
                  </div>
                  <div class="secli">
                    <li>افزودن سرنخ</li>
                    <li> مدیریت سرنخ ها</li>
                  </div>
                </div>

                <div className="containerlis">
                  <div class="mainli">
                    <li class="sidebarlistitem">
                      <GoTasklist className="sidebaricons" />
                      تسک های من
                      <SlArrowLeft className="openIcon" />
                    </li>
                  </div>
                  <div class="secli">
                    <li>افزودن تسک</li>
                    <li> مدیریت تسک ها</li>
                  </div>
                </div>

                <div class="containerlis">
                  <div class="mainli">
                    <li class="sidebarlistitem">
                      <FaHandshake className="sidebaricons" />
                      سفارشات من
                      <SlArrowLeft className="openIcon" />
                    </li>
                  </div>
                  <div class="secli">
                    <li>افزودن سفارش</li>
                    <li>مدیریت سفارشات</li>
                  </div>
                </div>

                <div className="containerlis">
                  <div class="maindiv">
                    <li class="sidebarlistitem">
                      <PiUsersThreeBold className="sidebaricons" />
                      مشتریان من
                      <SlArrowLeft className="openIcon" />
                    </li>
                  </div>
                  <div class="secli">
                    <li>افزودن مشتری </li>
                    <li> مدیریت مشتریان</li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
