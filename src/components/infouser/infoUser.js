import React from "react";
import './infoUser.css'
export default function infoUser() {
  return (
    <div className="containerUser">
      <div class="imgusers">
        <img className="imgUser" src="/img/user.png" alt="" />
      </div>
      <div class="nameuser">
        <h2>نام و نام خانوادگی </h2>
        <h3>سمت شغلی فرد</h3>
      </div>
      <div class="edituser">
        {/* <h3>ویرایش اطلاعات</h3> */}
      </div>
    </div>
  );
}
