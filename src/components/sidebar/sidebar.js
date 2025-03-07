import "./sidebar.css";
import { useState } from "react";
import { SlUser } from "react-icons/sl";
import { HiArrowsPointingOut } from "react-icons/hi2";
import { SlArrowLeft } from "react-icons/sl";
import { CiShare2 } from "react-icons/ci";
import { GoTasklist } from "react-icons/go";
import { FaHandshake } from "react-icons/fa6";
import { PiUsersThreeBold } from "react-icons/pi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSidebar } from "../../infoSidebar";
import { HiArrowsPointingIn } from "react-icons/hi2";


export default function Sidebar() {

  const [isfullscreen , setisfullscreen] = useState(false);
  const {isSidebarOpen, toggleSidebar}  = useSidebar()

  const fullscreenHandler = ()=> {
    if (!isfullscreen) {
      // وارد حالت فول‌اسکرین شوید
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // از حالت فول‌اسکرین خارج شوید
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }
    setisfullscreen(pre => !pre)
  }

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
            <span onClick={ () => fullscreenHandler()}>
              {isfullscreen ? (
                <HiArrowsPointingIn className="imgnavbar"/>
              ) : (
                <HiArrowsPointingOut className="imgnavbar"/>
              )}
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
