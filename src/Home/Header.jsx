import { useState } from "react";
import Logo from "./imges/Logo.svg";
import Burger from "./imges/burger.png";
import "./scss/main.scss";
const HeaderFun = () => {
  const [BtnSubmit, setbtnSubmit] = useState();
  const [FormSubmit, setformSubmit] = useState();
  const Btn = () => {
    return setbtnSubmit(!BtnSubmit);
  };
  const Form = () => {
    return setformSubmit(!FormSubmit);
  };
  return (
    <>
      <header className="header">
        <nav>
          <div className="container ">
            <div className="nav pt-5  d-flex align-items-lg-center align-items-start justify-content-between">
              <a href="#news" className="nav__link">
                <img src={Logo} alt="logo" />
              </a>
              <ul
                className={`nav__list ${
                  BtnSubmit ? "d-block bg-danger p-3 radius" : "d-none"
                }  mb-0    d-lg-flex align-items-lg-center justify-content-center`}
              >
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="#news">
                    OVERVIEW
                  </a>
                </li>
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="#news">
                    FEATURES
                  </a>
                </li>
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="#news">
                    TECHNOLOGY
                  </a>
                </li>
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="#news">
                    CONTACT
                  </a>
                </li>
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="#news">
                    Sign up
                  </a>
                </li>
              </ul>
              <button onClick={Form} className="nav__btn ">LOGIN</button>
              <a onClick={Btn} className="nav__burger" href="#news">
                <img
                  className="bg-transparent"
                  src={Burger}
                  alt="burger"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
            </div>
            <div className="hero">
              <h1 className="hero__title text-center ">CloudBudget</h1>
              <p className="hero__text text-center">
                Cloud budget management for everyone. Only €69.95 a Month After
                a 7 Day Trial of Up to €4.99
              </p>
              <button className="hero__btn d-block">Sign Up</button>
              <form
              action="#news"
              className={`form ${
                FormSubmit ? "d-block "  : "d-none"
              } p-5 position-absolute  rounded`}
            >
              <input
                className="email d-block mb-5   border-danger bg-transparent border-start-0 border-end-0 border-top-0 "
                type="email"
              />
              <input
                className="password d-block mb-5 border-danger   bg-transparent bg-transparent border-start-0 border-end-0 border-top-0"
                type="password"
              />
              <button onClick={Form} className="form__btn d-block">
                Login
              </button>
            </form>
            </div>
            
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderFun;
