import React from "react";
import "./login.css";
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";


export default function Login() {
  return (
    <div className="container">
    <img className="img-title" src="/s1.svg" alt=""/>
      <div className="containerWraper">
      
        <label htmlFor="text">نام کاربری</label>
<div className="container-input">
        <CiUser className="icon-login"/>
        <input className="login-input" name="text" type="text" placeholder="نام کاربری" />

</div>

        <label  htmlFor="password">رمز</label>
<div className="container-input">
        <CiLock className="icon-login"/>
        <input className="login-input" name="password" type="password" placeholder="رمز" />
</div>

        <input className="loginbtn" type="submit" value={"LOGIN"} />
        <div className="fechers-login">

          <div className="rememberMe">
          <label htmlFor=""> </label>
            <input className="chekbtn" type="checkbox" />
            من را به یاد داشته باش 
           
          </div>

          <div className="forgetPassword">
            <p>فراموشی رمز</p>
          </div>

        </div>
        <div class="newuser">
          ساخت اکانت جدید
        </div>

      </div>
    </div>
  );
}
