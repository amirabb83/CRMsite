import React from "react";
import "./addmarketer.css";
import { useSidebar } from "../../infoSidebar";
import { useState } from 'react';

export default function Addmarketer() {
  const { isSidebarOpen } = useSidebar();
  const [checkboxes, setCheckboxes] = useState({
    'مدیریت مشتریان': false,
    ' مدیریت کارمندان': false,
    'سراخ‌ها': false,
    'سفارشات': false,
    'تسک‌ها': false
  });

  const handleChange = (key) => {
    setCheckboxes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      <div className="fillterConteiner">
        <div
          className={
            !isSidebarOpen
              ? "fillterWraper"
              : "fillterWraper fillterWraperActive"
          }
        >
          <div class="titleAddMarket">
            <h2>فیلتر</h2>
            <hr />
          </div>
          <div class="formAddMarketer">
            <form action="#">
              <div class="containerFormAddMarketer">
                <div class="itemOfConteiner">
                  <label for="username">نام کاربری</label>
                  <input type="text" id="username" />
                </div>

                <div class="itemOfConteiner">
                  <label for="password">کلمه عبور</label>
                  <input type="password" id="password" />
                </div>

                <div class="itemOfConteiner">
                  <label for="name">نام </label>
                  <input type="text" id="name" />
                </div>

                <div class="itemOfConteiner">
                  <label for="numbetPhone">شماره همراه </label>
                  <input type="tel" id="numbetPhone" />
                </div>

                <div class="itemOfConteiner">
                  <label for="kodMeli">کد ملی</label>
                  <input type="tel" id="kodMeli" />
                </div>

                <div class="itemOfConteiner">
                <label for="madrak">مدرک تجصیلی</label>
                  <select id="madrak">
                    <option value="">
                      -- مدرک تحصیلی خود را انتخاب کنید --
                    </option>
                    <option value="diploma">دیپلم</option>
                    <option value="associate">فوق دیپلم (کاردانی)</option>
                    <option value="bachelor">لیسانس (کارشناسی)</option>
                    <option value="master">فوق لیسانس (کارشناسی ارشد)</option>
                    <option value="phd">دکتری</option>
                    <option value="postdoc">پسادکتری (Postdoc)</option>
                    <option value="high_school">زیر دیپلم</option>
                    <option value="professional_certificate"> گواهی حرفه‌ای</option>
                    <option value="other">سایر</option>
                  </select>
                </div>
                
                <div class="itemOfConteiner">
                <input type="file" name="" id=""/>
                </div>

                <div class="itemOfConteiner">
                  <h3>تعیین سطوح دسترسی</h3>
                </div>

                <div class="itemOfConteiner">
                <img src="/img/user.png" alt=""/>
                </div>

                <div class="itemOfConteiner">
                      <div>
                          <h2>لیست چک باکس‌ها</h2>
                          {Object.keys(checkboxes).map((item) => (
                            <div key={item}>
                              <label>
                                <input
                                  type="checkbox"
                                  checked={checkboxes[item]}
                                  onChange={() => handleChange(item)}
                                />
                                {item}
                              </label>
                            </div>
                          ))}
                        </div>
                </div>

                <div class="itemOfConteiner">
                <input type="button" value="افزودن"/>
                </div>


              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
