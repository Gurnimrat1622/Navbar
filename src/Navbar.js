import React from "react";
import "./Navbar.css";
import img1 from "./Images/Homepage.jpg";

function Navbar() {
  return (
    <div>
      <nav>
        <label class="logo">Navbar</label>
        <ul>
          <li>
            <a class="active" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">
              Languages
              <i class="fas fa-caret-down"></i>
            </a>
            <ul>
              <li>
                <a href="#">Python</a>
              </li>
              <li>
                <a href="#">C++</a>
              </li>
              <li>
                <a href="#">Javascript</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              Web Development
              <i class="fas fa-caret-down"></i>
            </a>
            <ul>
              <li>
                <a href="#">Front End</a>
              </li>
              <li>
                <a href="#">Back End</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <form className="search-form">
          <input type="text" placeholder="Search"></input>
          <button>Search</button>
        </form>
      </nav>
      <div className="container">
        <img src={img1}></img>
      </div>
    </div>
  );
}
export default Navbar;
