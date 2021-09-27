import { faUserCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";
const Cart = ({ data }) => {
  let count = 0;
  let totalSalary = 0;
  for (const person of data) {
    count += 1;
    totalSalary += person.salary;
  }
  return (
    <>
      <h4>
        <FontAwesomeIcon icon={faUsers} className="icon" /> Total Saved Writers:{" "}
        {count}
      </h4>
      <h5>Writers Total Salary: ${totalSalary}</h5>
      <ul>
        {data.map((li) => (
          <li key={Math.random()}>
            <FontAwesomeIcon icon={faUserCheck} className="icon" /> {li.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
