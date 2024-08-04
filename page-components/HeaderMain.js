import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function HeaderMain() {
  return (
    <div className="border-bottom border-secondary py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="fw-bold h1 text-dark">Almari</div>
      </div>
    </div>
  );
}
