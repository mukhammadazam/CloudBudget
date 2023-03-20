import { useState } from "react";
import Logo from "./imges/Logo.svg";
import Burger from "./imges/burger.png";
import "./scss/main.scss";
const HeaderFun = () => {
  const [BtnSubmit, setbtnSubmit] = useState();
  const Btn = () => {
    return setbtnSubmit(!BtnSubmit);
  };
  return (
    <>
      <header className="header">
        <nav>
          <div className="container">
            <div className="nav pt-5  d-flex align-items-lg-center align-items-start justify-content-between">
              <a href="logo" className="nav__link">
                <img src={Logo} alt="logo" />
              </a>
              <ul
                className={`nav__list ${
                  BtnSubmit ? "d-block bg-danger p-3 radius" : "d-none"}  mb-0    d-lg-flex align-items-lg-center justify-content-center`}
              >
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="#">
                    OVERVIEW
                  </a>
                </li>
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="#">
                    FEATURES
                  </a>
                </li>
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="#">
                    TECHNOLOGY
                  </a>
                </li>
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="#">
                    CONTACT
                  </a>
                </li>
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="#">
                    Sign up
                  </a>
                </li>
              </ul>
              <button className="nav__btn ">LOGIN</button>
              <a onClick={Btn} className="nav__burger" href=" #">
                <img
                  className="bg-transparent"
                  src={Burger}
                  alt="burger"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
            </div>
            <div className="hero">
              <h1 className="hero__title text-center">CloudBudget</h1>
              <p className="hero__text text-center">
                Cloud budget management for everyone. Only €69.95 a Month After
                a 7 Day Trial of Up to €4.99
              </p>
              <button className="hero__btn d-block">Sign Up</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderFun;
