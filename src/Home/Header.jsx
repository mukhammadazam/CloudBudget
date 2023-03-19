import Logo from "./imges/Logo.svg";
import "./scss/main.scss";
const headerFun = () => {
  return (
    <>
      <header className="header">
        <nav>
          <div className="container">
            <div className="nav pt-5 d-flex align-items-center justify-content-between">
              <a href="logo" className="nav__link">
                <img src={Logo} alt="logo" />
              </a>
              <ul className="nav__list gap-5  d-md-flex align-items-md-center justify-content-center">
                <li className="nav__list--item">
                  <a className="text-decoration-none" href="item">OVERVIEW</a>
                </li>
                <li className="nav__list--item">
                  <a className="text-decoration-none" href="item">FEATURES</a>
                </li>
                <li className="nav__list--item">
                  <a className="text-decoration-none" href="item">TECHNOLOGY</a>
                </li>
                <li className="nav__list--item">
                  <a className="text-decoration-none" href="item">CONTACT</a>
                </li>
                <li className="nav__list--item">
                  <a className="text-decoration-none" href="item">Sign up</a>
                </li>
              </ul>
              <button className="nav__btn border-0">LOGIN</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default headerFun;
