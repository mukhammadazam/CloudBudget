import '../scss/main.scss';
import Download from './download.svg';

const Technology = () => {
  return (
    <div className='technology pt-5'>
        <div className='container'>
            <h2 className='text-center'>Technology</h2>
            <div className='row'>
                <div className='col-lg-3 col-sm-6 col-12'>
                    <div className='tech text-center'>
                        <span className='tech__span'>01</span>
                        <h3 className='tech__h3'>Cloud Storage</h3>
                        <p className='tech__p'>Access your account from anywhere in the world on any device</p>
                        <img className='tech__img' src={Download} alt="download" />
                    </div>
                </div>
                <div className='col-lg-3 col-sm-6 col-12'>
                    <div className='tech text-center'>
                        <span className='tech__span'>01</span>
                        <h3 className='tech__h3'>Cloud Storage</h3>
                        <p className='tech__p'>Access your account from anywhere in the world on any device</p>
                        <img className='tech__img' src={Download} alt="download" />
                    </div>
                </div>
                <div className='col-lg-3 col-sm-6 col-12'>
                    <div className='tech text-center'>
                        <span className='tech__span'>01</span>
                        <h3 className='tech__h3'>Cloud Storage</h3>
                        <p className='tech__p'>Access your account from anywhere in the world on any device</p>
                        <img className='tech__img' src={Download} alt="download" />
                    </div>
                </div>
                <div className='col-lg-3 col-sm-6 col-12'>
                    <div className='tech text-center'>
                        <span className='tech__span'>01</span>
                        <h3 className='tech__h3'>Cloud Storage</h3>
                        <p className='tech__p'>Access your account from anywhere in the world on any device</p>
                        <img className='tech__img' src={Download} alt="download" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technology