import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../Search";
import "./index.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onFindValue = () => {
    const routeFinder = `/items?search=${search}`;
    navigate(routeFinder);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo-container">
          <a className="navbar-logo" href="/">
            Mercado Libre
          </a>
        </div>
        <Search
          finderContainerStyle={{ width: "60%" }}
          value={search}
          onChange={(value) => {
            setSearch(value);
          }}
          onSubmit={onFindValue}
        ></Search>
      </div>
    </div>
  );
};

export default NavBar;
