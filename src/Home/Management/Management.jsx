import Image from "./management.png";
import PLaybutton from './playbutton.png';
import '../scss/main.scss';

const Management = () => {
  return (
    <div className='container'>
        <div className='row managements d-flex align-items-center justify-content-between gy-5 pt-5 pb-5'>
            <div className='col-md-6 col-12 management'>
                <div className='management__main text-center text-md-start'>
                    <h3 className='management__main--title'>Easy to Use Cloud Budget Management Software</h3>
                    <p className='management__main--text'>Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.</p>
                    <a className='management__main--link' href="#learn">Learn More</a>
                </div>
            </div>
            <div className='col-md-6 col-12 management__image'>
                  <div className='management__image--wrapper position-relative'>
                    <img src={Image} alt="Management" style={{width: "100%"}}/>
                    <img src={PLaybutton} alt="Playbutton" className="position-absolute playbutton"/>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Management