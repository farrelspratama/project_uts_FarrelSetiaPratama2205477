import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <section className="header">
      <Link to="/" className="logo">
        Portofolio
      </Link>
      <nav className="navbar">
        <Link to="/" style={{ "--i": 1 }} className="nav-link">
          Home
        </Link>
        <Link to="/about" style={{ "--i": 2 }} className="nav-link">
          About
        </Link>
        <Link to="/skills" style={{ "--i": 3 }} className="nav-link">
          Skills
        </Link>
        <Link to="/contact" style={{ "--i": 4 }} className="nav-link">
          Contact
        </Link>
      </nav>
      <Outlet />
    </section>
  );
}
