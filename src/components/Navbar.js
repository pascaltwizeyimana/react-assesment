import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
     
      <div className="bg-black p-4 text-white space-x-2">
        <Link to="/" className="rounded-md bg-pink-300 text-white p-2" >Home</Link>
        <Link to="/modules" className="rounded-md bg-pink-300 text-white p-2">Modules</Link>
        <Link to="/exams" className="rounded-md bg-pink-300 text-white p-2">Exams</Link>
        <Link to="/about" className="rounded-md bg-pink-300 text-white p-2">About Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;