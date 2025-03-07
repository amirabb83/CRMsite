import React, { useEffect } from "react";
import { HiOutlineFaceFrown, HiOutlineFaceSmile } from "react-icons/hi2";
import "./massageBox.css";

export default function MassageBox({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`container-massgebox ${type === 'success' ? "success-massge" : "error-massge"}`}>
      <div className="icon-massgebox">
        {type === "success" ? (
          <HiOutlineFaceSmile className="icon-massge" />
        ) : (
          <HiOutlineFaceFrown className="icon-massge" />
        )}
      </div>

      <div className="title-massge">
        <h2>{type === "success" ? "موفقیت" : "خطا"}</h2>
        <p>{message}</p>
      </div>

      <div className="progress-bar"></div>
    </div>
  );
}