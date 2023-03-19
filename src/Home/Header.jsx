import Logo from "./imges/Logo.svg";
import "./scss/main.scss";
const headerFun = () => {
  return (
    <>
      <header className="header">
        <nav>
          <div className="container">
            <div className="nav pt-5  d-flex align-items-center justify-content-between">
              <a href="logo" className="nav__link">
                <img src={Logo} alt="logo" />
              </a>
              <ul className="nav__list gap-5 mb-0  d-md-flex align-items-md-center justify-content-center">
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="item">
                    OVERVIEW
                  </a>
                </li>
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="item">
                    FEATURES
                  </a>
                </li>
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="item">
                    TECHNOLOGY
                  </a>
                </li>
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="item">
                    CONTACT
                  </a>
                </li>
                <li className="nav__list--item p-0">
                  <a className="text-decoration-none" href="item">
                    Sign up
                  </a>
                </li>
              </ul>
              <button className="nav__btn ">LOGIN</button>
            </div>
            <div className="hero">
              <h1 className="hero__title text-center">CloudBudget</h1>
              <p className="hero__text text-center">
              Cloud budget management for everyone. Only €69.95 a Month After a 7 Day Trial of 
Up to €4.99
              </p>
              <button className="hero__btn d-block">Sign Up</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default headerFun;
