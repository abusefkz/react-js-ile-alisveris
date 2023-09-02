import React, { useContext } from "react";
import "../css/Dropdown.css";
import { crtx } from "./UseContext";

const DropDown = ({ ıtem }) => {
  const { beforeExpensive } = useContext(crtx);

  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Gelişmiş Sıralama
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a
          className="dropdown-item"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            beforeExpensive(ıtem);
          }}
        >
          Fiyata Göre Önce(En Yüksek)
        </a>
        <a className="dropdown-item" href="/">
          Fiyata Göre Önce(En Düşük)
        </a>
      </div>
    </div>
  );
};

export default DropDown;
