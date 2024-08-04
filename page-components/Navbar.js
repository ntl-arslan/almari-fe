import Link from "next/link";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {
  return (
    <nav className="d-none d-lg-block">
      <div className="container">
        <div className="d-flex gap-3 mx-auto py-3">
          <Link className="nav-link" href="/">HOME</Link>
          <Link className="nav-link" href="#">CATEGORIES</Link>
          <Link className="nav-link" href="/Shoes">SHOES</Link>
          <Link className="nav-link" href="/Lawns">LAWNS</Link>
          <Link className="nav-link" href="/Suits">SUITS</Link>
          <Link className="nav-link" href="/Trousers">TROUSERS</Link>
        </div>
      </div>
    </nav>
  );
}
