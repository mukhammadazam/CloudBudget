import '../scss/main.scss';
import Download from './download.svg';
import Secure from './secure.svg';
import Pdf from './pdf.svg';
import Csv from './csv.svg';

const Technology = () => {
  return (
    <div className='technology pt-5 pb-5 mb-5'>
        <div className='container'>
            <h2 className='text-center'>Technology</h2>
            <div className='row'>
                <div className='col-lg-3 col-sm-6 col-12 '>
                    <div className='tech text-center techof1'>
                        <span className='tech__span'>01</span>
                        <h3 className='tech__h3'>Cloud Storage</h3>
                        <p className='tech__p'>Access your account from anywhere in the world on any device</p>
                        <img className='tech__img' src={Download} alt="download" />
                    </div>
                </div>
                <div className='col-lg-3 col-sm-6 col-12'>
                    <div className='tech text-center techof2'>
                        <span className='tech__span'>02</span>
                        <h3 className='tech__h3'>Secure</h3>
                        <p className='tech__p'>All your information is stored on secure cloud servers</p>
                        <img className='tech__img' src={Secure} alt="secure" />
                    </div>
                </div>
                <div className='col-lg-3 col-sm-6 col-12'>
                    <div className='tech text-center techof3'>
                        <span className='tech__span'>03</span>
                        <h3 className='tech__h3'>Pdf Download</h3>
                        <p className='tech__p'>Download any of your reports in PDF format</p>
                        <img className='tech__img' src={Pdf} alt="pdf" />
                    </div>
                </div>
                <div className='col-lg-3 col-sm-6 col-12'>
                    <div className='tech text-center techof4'>
                        <span className='tech__span'>04</span>
                        <h3 className='tech__h3'>CSV Download</h3>
                        <p className='tech__p'>All your information is stored on secure cloud servers</p>
                        <img className='tech__img' src={Csv} alt="csv" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technology