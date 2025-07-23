import React from "react";

function Navbar() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Brand Name</h1>
      <nav>
        <ul className="flex justify-between">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;