import React from "react";
import "./otherInformations.css";
import TableHome from "../TableHome/TableHome";
import { SlSocialInstagram } from "react-icons/sl";
import { FaUserFriends } from "react-icons/fa";
import { RiAdvertisementLine } from "react-icons/ri";
import { TfiMore } from "react-icons/tfi";

export default function OtherInformations() {
  return (
    <div class="informationwraper">
      <div class="oi1 oi rectangle">
        <div class="titleRecrtangle">
          <div class="infoTitle">
            <h3>هواپیما ملاقات</h3>
          </div>
          <div class="btnTitle">
            <button>افزودن ملاقات</button>
          </div>
        </div>
        <TableHome
          name={"نام"}
          phone={"شماره تماس"}
          startdate={"تاریخ قرارداد"}
          reson={"علت ملاقات"}
        />
      </div>
      <div class="oi1 oi square ">
        <h3>لیست پروژه ها </h3>
        <h4>پروژه های در حال اجرا : 4 </h4>
        <br />
        <ul>
          <li>طراحی فرانت </li>
          <li>طراحی فرانت </li>
          <li>طراحی فرانت</li>
          <li>طراحی فرانت</li>
        </ul>
      </div>

      <div class=" oi2 oi rectangle">
        <div class="titleRecrtangle">
          <div class="infoTitle">
            <h3> کمپین های تبلیغاتی</h3>
          </div>
          <div class="btnTitle">
            <button>افزودن کمپین </button>
          </div>
        </div>

        <TableHome
          name={"نام"}
          target={"جامعه هدف"}
          startdate={"تاریخ شروع"}
          enddate={"تاریخ پایان"}
        />
      </div>

      <div class=" oi2 oi square">
        <h3>تونل های ورود مشتری:</h3>
        <br />
        <div class="logincustumer">
          <div class="titlelogincustumer">
            <SlSocialInstagram />
            سوشال مدیا
          </div>
          <p class="countlogincustumer">800</p>
        </div>
        <div class="logincustumer">
          <div class="titlelogincustumer">
            <FaUserFriends />
            معرفی آشنایان
          </div>
          <p class="countlogincustumer">800</p>
        </div>
        <div class="logincustumer">
          <div class="titlelogincustumer">
            <RiAdvertisementLine />
            کمپین های تبلیغاتی
          </div>
          <p class="countlogincustumer">800</p>
        </div>
        <div class="logincustumer">
          <div class="titlelogincustumer">
            <TfiMore />
            سایر موارد
          </div>
          <p class="countlogincustumer">800</p>
        </div>
      </div>
    </div>
  );
}
