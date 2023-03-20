import logo1 from "./imges/fasbook.svg";
import logo2 from "./imges/linkidin.svg";
import logo3 from "./imges/twtr.svg";
import logo4 from "./imges/kartalar.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container pt-5">
        <div className="footer pt-5">
          <ul className="footer__list d-md-flex row gy-5  justify-content-center align-items-lg-start justify-content-md-between">
            <li className="footer__list--item col-sm-6 col-12 col-lg-3">
              <h6 className="footer__title">Address</h6>
              <p className="footer__text">
                Pipang Ltd, Griva Digeni, <br />
                81-83 Jacovides Tower, 1st Floor <br />
                1090 Picosia USA
              </p>
            </li>
            <li className="footer__list--item col-sm-6 col-12 col-lg-3">
              <h6 className="footer__list--title">Services</h6>
              <ul className="p-0 gap-2">
                <li className="item">overview</li>
                <li className="item">features</li>
                <li className="item">technology</li>
                <li className="item">Terms & Conditions</li>
                <li className="item">Privecy</li>
              </ul>
            </li>
            <li className="footer__list--item col-sm-6 col-12 col-lg-3">
              <h6 className="footer__list--title">Get in Touch</h6>
              <a
                href="#news"
                className="footer__list--link text-decoration-none py-3 d-block"
              >
                info@cloudbudget.com
              </a>
              <a
                href="#news"
                className="footer__list--link pb-3 text-decoration-none d-block"
              >
                +1 844-721-7120
              </a>
              <div className=" d-flex gap-3">
                <img className="d-block" src={logo1} alt="fasbook" />
                <img className="d-block" src={logo2} alt="linkidin" />
                <img className="d-block" src={logo3} alt="twtr" />
              </div>
            </li>
            <li className="footer__list-item col-sm-6 col-12 col-lg-3">
              <h6 className="footer__title ">We Support</h6>
              <img src={logo4} alt="kartalar" />
            </li>
          </ul>
          <p className="footer__text1">Copyright 2018 CloudBudget</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
