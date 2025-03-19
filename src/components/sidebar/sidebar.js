import "./sidebar.css";
import { SlUser } from "react-icons/sl";
import { HiArrowsPointingOut } from "react-icons/hi2";
import { SlArrowLeft } from "react-icons/sl";
import { CiShare2 } from "react-icons/ci";
import { GoTasklist } from "react-icons/go";
import { FaHandshake } from "react-icons/fa6";
import { PiUsersThreeBold } from "react-icons/pi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import { useContext } from "react";
import { useSidebar } from "../../infoSidebar";
import { AuthContext } from "../../AuthContext";
import { HiArrowsPointingIn } from "react-icons/hi2";
import useFullscreen from "../../hooks/usefullscreen";
import { useState } from "react";
import { Link , useLocation } from "react-router-dom";


export default function Sidebar() {
  const { isAuthenticated } = useContext(AuthContext);
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { isfullscreen, fullscreenHandler } = useFullscreen();
  const [activeLists, setActiveLists] = useState([]);
  const location = useLocation()

  const showlihandler = (index) => {
    setActiveLists((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <>
      {isAuthenticated ? (
        <>
          <div class="navbar">
            <div className="navbarWraper">
              <div
                className={
                  !isSidebarOpen
                    ? "navbarRight"
                    : "navbarRight navbarRight-active"
                }
                onClick={toggleSidebar}
              >
                {!isSidebarOpen ? (
                  <GoArrowLeft className="hamicon" />
                ) : (
                  <img
                    src="/burger-list-menu-navigation-svgrepo-com.svg"
                    alt=""
                    className="hamicon"
                  />
                )}
              </div>
              <div className="navbarLeft">
                <span onClick={() => fullscreenHandler()}>
                  {isfullscreen ? (
                    <HiArrowsPointingIn className="imgnavbar" />
                  ) : (
                    <HiArrowsPointingOut className="imgnavbar" />
                  )}
                </span>
              </div>
            </div>
          </div>

          <div
            className={isSidebarOpen ? "sidebar-active sidebar " : "sidebar"}
          >
            <div class="sidebarwraper">
              <div class="sidebarimg">
                <img
                  className="zimpndsidebar"
                  src="/dashbordtitle.jpg"
                  alt=""
                />
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
                      <div className="mainli" onClick={() => showlihandler(0)}>
                        <li className="sidebarlistitem">
                          <SlUser className="sidebaricons" />
                          مدیریت کارکنان
                          <SlArrowLeft
                            className={
                              activeLists.includes(0)
                                ? "openIcon-active"
                                : "openIcon"
                            }
                          />
                        </li>
                      </div>
                      <div
                        className={
                          activeLists.includes(0) ? "secli-active" : "secli"
                        }
                      >
                      {console.log(location.pathname)}
                        <li className={location.pathname === '/addmarketer'  ?  'activeli' : ''}>
                          <Link to={'/addmarketer'}> افزودن کارکنان</Link>
                        </li>
                        <li>مدیریت کارکنان</li>
                      </div>
                    </div>

                    <div className="containerlis">
                      <div onClick={() => showlihandler(1)} className="mainli">
                        <li className="sidebarlistitem">
                          <CiShare2 className="sidebaricons" />
                          سرنخ های من
                          <SlArrowLeft
                            className={
                              activeLists.includes(1)
                                ? "openIcon-active"
                                : "openIcon"
                            }
                          />
                        </li>
                      </div>
                      <div
                        className={
                          activeLists.includes(1) ? "secli-active" : "secli"
                        }
                      >
                        <li>افزودن سرنخ</li>
                        <li> مدیریت سرنخ ها</li>
                      </div>
                    </div>

                    <div className="containerlis">
                      <div onClick={() => showlihandler(2)} className="mainli">
                        <li className="sidebarlistitem">
                          <GoTasklist className="sidebaricons" />
                          تسک های من
                          <SlArrowLeft
                            className={
                              activeLists.includes(2)
                                ? "openIcon-active"
                                : "openIcon"
                            }
                          />
                        </li>
                      </div>
                      <div
                        className={
                          activeLists.includes(2) ? "secli-active" : "secli"
                        }
                      >
                        <li>افزودن تسک</li>
                        <li> مدیریت تسک ها</li>
                      </div>
                    </div>

                    <div className="containerlis">
                      <div onClick={() => showlihandler(3)} className="mainli">
                        <li className="sidebarlistitem">
                          <FaHandshake className="sidebaricons" />
                          سفارشات من
                          <SlArrowLeft
                            className={
                              activeLists.includes(3)
                                ? "openIcon-active"
                                : "openIcon"
                            }
                          />
                        </li>
                      </div>
                      <div
                        className={
                          activeLists.includes(3) ? "secli-active" : "secli"
                        }
                      >
                        <li>افزودن سفارش</li>
                        <li>مدیریت سفارشات</li>
                      </div>
                    </div>

                    <div className="containerlis">
                      <div onClick={() => showlihandler(4)} className="maindiv">
                        <li className="sidebarlistitem">
                          <PiUsersThreeBold className="sidebaricons" />
                          مشتریان من
                          <SlArrowLeft
                            className={
                              activeLists.includes(4)
                                ? "openIcon-active"
                                : "openIcon"
                            }
                          />
                        </li>
                      </div>
                      <div
                        className={
                          activeLists.includes(4) ? "secli-active" : "secli"
                        }
                      >
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
      ) : (
        <></>
      )}
    </>
  );
}
