import Logo from "./imges/Logo.svg";
import "./scss/main.scss";
const headerFun = () => {
  return (
    <>
      <header className="header">
        <nav>
          <div className="container">
            <div className="nav">
              <a href="logo" className="nav__link">
                <img src={Logo} alt="logo" />
              </a>
              <ul className="nav__list">
                <li className="nav__list--item">
                  <a href="item">OVERVIEW</a>
                </li>
                <li className="nav__list--item">
                  <a href="item">FEATURES</a>
                </li>
                <li className="nav__list--item">
                  <a href="item">TECHNOLOGY</a>
                </li>
                <li className="nav__list--item">
                  <a href="item">CONTACT</a>
                </li>
                <li className="nav__list--item">
                  <a href="item">Sign up</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default headerFun;
