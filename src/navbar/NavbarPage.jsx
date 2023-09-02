import InputItem from "./InputItem";
import "../css/NavbarPage.css";
import { useContext } from "react";
import { crtx } from "../components/UseContext";

const NavbarPage = ({ InputSearch, showClick }) => {
  const ctx = useContext(crtx);

  const length = ctx.ıtems.length;

  return (
    <nav className="navbar navbar-expand-sm navbar-light ">
      <a className="navbar-brand" href="/">
        Anasayfa
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ul">
          <li className="nav-item active">
            <InputItem InputSearch={InputSearch} />
          </li>
          <li>
            <button onClick={showClick} className="btn btn-secondary">
              Sepetim <span>{length} </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarPage;
