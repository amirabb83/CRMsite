import React, { useState, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import "./login.css";
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import users from "./userListdata";
import MassageBox from "./massageBox/massageBox";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [massageBox, setmassageBox] = useState(false);
  const [typemassgebox, settypemassbox] = useState("");
  const [userslist, setuserslist] = useState(users);
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const clickhandler = (e) => {
    e.preventDefault();

    const userExists = userslist.some(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      setmassageBox(true);
      settypemassbox("success");
      login();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setmassageBox(true);
      settypemassbox("error");
    }
  };

  return (
    <>
      <div className="container-login">
        <img className="img-title" src="/s1.svg" alt="" />
        <form onSubmit={clickhandler}>
          <div className="containerWraper">
            <label htmlFor="text">نام کاربری</label>
            <div className="container-input">
              <CiUser className="icon-login" />
              <input
                className="login-input"
                name="text"
                type="text"
                placeholder="نام کاربری"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
              />
            </div>
            <label htmlFor="password">رمز</label>
            <div className="container-input">
              <CiLock className="icon-login" />
              <input
                className="login-input"
                name="password"
                type="password"
                placeholder="رمز"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
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
          </div>
        </form>
      </div>
      {massageBox && (
        <MassageBox
          message={
            typemassgebox === "success"
              ? "خوش آمدید! در حال انتقال به صفحه اصلی..."
              : "رمز یا نام کاربری اشتباه است"
          }
          type={typemassgebox}
          onClose={() => setmassageBox(false)}
        />
      )}
    </>
  );
}
