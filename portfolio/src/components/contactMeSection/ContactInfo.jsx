import React from "react";
import {HiOutlineMail} from "react-icons/hi";
import {FiPhone} from "react-icons/fi";
import {IoLocationOutline} from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return <div className="flex flex-col gap-4 text-white">
    <SingleInfo text="haseebullahshirzadahsf@gmail.com" Image={HiOutlineMail}/>
    <SingleInfo text="+93-789-425-842" Image={FiPhone}/>
    <SingleInfo text="Kabul Afghanistan" Image={IoLocationOutline}/>
  </div>;
};

export default ContactInfo;
