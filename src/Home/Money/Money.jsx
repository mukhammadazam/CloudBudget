import '../scss/main.scss';
import MoneyImg from './money.png';
import MoneyBg1 from './moneybg1.png';
import MoneyBg2 from './moneybg2.png';
import PlayMarket from './play-market.svg';
import Apple from './apple.svg';
import Windows from './windows.svg';
 
const Money = () => {
  return (
    <div className='moneyal'>
      <div className='container'>        
        <div className='row moneyall d-flex al justify-content-between g-5 pt-5 pb-5'>
            <div className='col-md-6 col-12 money text-md-start text-center '>
                <div className='money__main text-center text-md-start  px-md-0 px-5'>
                    <h3 className='money__main--title'>Easy to Use Cloud Budget Management Software</h3>
                    <p className='money__main--text'>Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.</p>
                    <div className='money__main--social d-flex justify-content-center justify-content-md-start'>
                      <img src={PlayMarket} alt="Playmarket" />
                      <img src={Apple} alt="Aplle" />
                      <img src={Windows} alt="Windows" />
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-12 money__image px-md-0 px-5'>
                  <div className='money__image--wrapper position-relative'>
                    <img src={MoneyImg} alt="Money" style={{width: "90%"}}/>
                    <img src={MoneyBg1} alt="Moneybg1"style={{width: "60%"}} className='position-absolute'/>
                    <img src={MoneyBg2} alt="Moneybg2"style={{width: "60%"}} className='position-absolute'/>
                  </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Money