import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Writer.css";
const Writer = ({ data, addToCart }) => {
  // destructure data 
  const { name, born, gender, occupation, salary, img } = data;
  return (
    <div className="card">
      <div className="card-header">
        <img src={img} alt="" />
      </div>
      <div className="card-body">
        <h4>
          <span>Name:</span> {name}
        </h4>
        <h4>
          <span>Born:</span> {born}
        </h4>
        <h4>
          <span>Occupation:</span> {occupation}
        </h4>
        <h4>
          <span>Gender:</span> {gender}
        </h4>
        <h4>
          <span>Salary:</span> {salary}
        </h4>
      </div>
      <div className="card-footer">
        <button type="button" onClick={() => addToCart(data)}>
          <FontAwesomeIcon icon={faBookmark} className="icon" />
          Saved To Bookmark
        </button>
      </div>
    </div>
  );
};

export default Writer;
