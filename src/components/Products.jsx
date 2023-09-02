import React, { useContext } from "react";
import "../css/Products.css";
import { crtx } from "./UseContext";

const Products = ({ ıtem }) => {
  const { addItem } = useContext(crtx);

  return (
    <div className="card">
      <img src={ıtem.img} alt="" />

      <ul className="list-group">
        <li className="list-group-item">{ıtem.name} </li>
        <li className="list-group-item list-group-text">
          Fiyat: <span> $ {ıtem.price}</span>
        </li>
      </ul>
      <button onClick={() => addItem(ıtem)} className="btn btn-success">
        Sepete Ekle
      </button>
    </div>
  );
};

export default Products;
