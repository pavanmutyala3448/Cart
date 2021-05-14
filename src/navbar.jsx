import React from "react";
const Navbar = (props) => {
  const { total } = props;
  return (
    <div>
      <nav className="navbar navbar-light bg-light ">
        <a className="navbar-brand" href="pavan">
          Navbar
          <span className="badge bg-secondary">{total}</span>
        </a>
      </nav>
    </div>
  );
};
export default Navbar;
