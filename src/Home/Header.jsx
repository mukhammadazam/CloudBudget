import Logo from './imges/Logo.svg';
import './scss/main.scss';
const headerFun = () => {
return <>
<header className='header'>
  <nav>
    <div className="container">
      <div className="nav">
        <a href="logo" className="nav__link"><img src={Logo} alt="logo" /></a>
        <ul className="nav__list">
          <li className="nav__list--item"><a href="item">О компании</a></li>
          <li className="nav__list--item"><a href="item">Портфолио</a></li>
          <li className="nav__list--item"><a href="item">Услуги</a></li>
          <li className="nav__list--item"><a href="item">Контакты</a></li>
        </ul>       
      </div>
    </div>
  </nav>
</header>
  </>;
};

export default headerFun;
