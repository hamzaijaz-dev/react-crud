import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-area">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="menu-wrapper">
              <div className="logo">
                <a href="/">
                  {/*<img src="assets/img/logo/logo.png" alt="" />*/}
                  <h2>CRUD Application</h2>
                </a>
              </div>
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li>
                      <Link to="/">List</Link>
                    </li>
                    <li>
                      <Link to="/counter">Counter</Link>
                    </li>
                    <li className="hot">
                      <Link to="/about">About</Link>
                    </li>
                    {/*<li className="hot">*/}
                    {/*  <a href="#">Latest</a>*/}
                    {/*  <ul className="submenu">*/}
                    {/*    <li>*/}
                    {/*      <a href="shop.html"> Product list</a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*      <a href="product_details.html"> Product Details</a>*/}
                    {/*    </li>*/}
                    {/*  </ul>*/}
                    {/*</li>*/}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
