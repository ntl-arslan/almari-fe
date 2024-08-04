import React from "react";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";

export default function MobNavbar() {
  return (
    <div className="d-lg-none position-fixed bottom-0 start-50 translate-middle-x w-100 bg-white px-3" style={{ maxWidth: '500px' }}>
      <div className="d-flex justify-content-between align-items-center py-2" style={{ fontSize: '28px' }}>
        <IoMenuOutline />
        
        <div className="position-relative">
          <HiOutlineShoppingBag />
          <div className="bg-danger rounded-circle position-absolute top-0 end-0 d-flex justify-content-center align-items-center" style={{ width: '18px', height: '18px', fontSize: '12px', lineHeight: '18px' }}>
            0
          </div>
        </div>

        <AiOutlineHome />

        <div className="position-relative">
          <FiHeart />
          <div className="bg-danger rounded-circle position-absolute top-0 end-0 d-flex justify-content-center align-items-center" style={{ width: '18px', height: '18px', fontSize: '12px', lineHeight: '18px' }}>
            0
          </div>
        </div>

        <AiOutlineAppstore />
      </div>
    </div>
  );
}
