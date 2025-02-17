import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerimg1 from '../../../Images/footer img/gallery-3-90x65.jpg';
import footerimg2 from '../../../Images/footer img/post-1-90x65.jpg';
import footerimg3 from '../../../Images/footer img/video-post-90x65.jpg';

  import {
    faAppStore,
    faApple,
    faAmazon,
    faPaypal,
    faWindows,
    faSteam,
    faGooglePlay,
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faFacebookF,
    faGooglePlusG,
    faTwitter,
    faWhatsapp,
  } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  './Footer.css';
import Footericon from './Footericon/Footericon';

const Footer = () => {
    return (
        <div >
            <Footericon></Footericon>
        



            <div className='main-footer'>
            <Container >
  
  <Row >
    <Col style={{marginTop:'30px'}}>
    <h1 className='footer-title'>ABOUT <span style={{color:'gold'}} >US</span></h1>
    <p style={{marginBottom:'20px'}}>Amet nisl purus in mollis nunc sed id. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Volutpat a tincidunt vitae semper pellentesque diam volutpat.</p>
    <div className='footer-nav'>
        <div >
            <li className='footer-li'>Home</li>
            <li className='footer-li'>blog</li>
            <li className='footer-li'>team</li>
            <li className='footer-li'>eSports</li>
        </div>
        <div>
            <li className='footer-li' >Game</li>
            <li className='footer-li'>About</li>
            <li className='footer-li'>coumunity</li>
            <li className='footer-li'>Contact</li>
        </div>
    </div>
    </Col>


    <Col style={{marginTop:'30px'}}><h1 className='footer-title'>LATEST <span style={{color:'gold'}} >NEWS</span></h1>
        <div>
            <div className='footer-cart'>
                <div>
                    <img src={footerimg1} alt="" />
                </div>
                <div style={{marginRight:'140px', paddingTop:'10px'}}>
                    <p className='news-des'>About Space and World</p>
                    <small className='news-date'>January 2, 2018</small>
                </div>
            </div>
       
      
            <div className='footer-cart'>
                <div>
                    <img src={footerimg2} alt="" />
                </div>
                <div style={{marginRight:'140px', paddingTop:'10px'}}>
                    <p className='news-des'>New Trailer is Released!</p>
                    <small className='news-date'>January 2, 2018</small>
                </div>
            </div>
        
            <div className='footer-cart'>
                <div>
                    <img src={footerimg3} alt="" />
                </div>
                <div style={{marginRight:'140px', paddingTop:'10px'}}>
                    <p className='news-des'>Price List of the Games</p>
                    <small className='news-date'>January 2, 2018</small>
                </div>
            </div>
        </div>
    </Col>
    

    <Col style={{marginTop:'30px'}}>
    <h1 className='footer-title'> APPS <span style={{color:'gold'}} >& PLATFORMS
    </span></h1>

        <div className='footer-news-main'>
          <div>
            <div className='footer-appmain'>
                <div className='footer-app'>
                    <div> <FontAwesomeIcon className="footer-icon" icon={faApple} />
                    </div>
                    <div> 
                        <small className='app-buy'>Buy now vai</small> <br />
                        <strong>Apple Store</strong>
                    </div>
                </div>
               
            </div>
            <div className='footer-appmain'>
                <div className='footer-app'>
                    <div> <FontAwesomeIcon className="footer-icon" icon={faSteam} />
                    </div>
                    <div> 
                        <small className='app-buy'>Buy now vai</small> <br />
                        <strong>Steam</strong>
                    </div>
                </div>
               
            </div>
            <div className='footer-appmain'>
                <div className='footer-app'>
                    <div> <FontAwesomeIcon className="footer-icon" icon={faAmazon} />
                    </div>
                    <div> 
                        <small className='app-buy'>Buy now vai</small> <br />
                        <strong>Amazon</strong>
                    </div>
                </div>
               
            </div>
          </div>





            <div>
            <div className='footer-appmain'>
                <div className='footer-app'>
                    <div> <FontAwesomeIcon className="footer-icon" icon={faGooglePlay} />
                    </div>
                    <div> 
                        <small className='app-buy'>Buy now vai</small> <br />
                        <strong>Google Play </strong>
                    </div>
                </div>
               
            </div>
            <div className='footer-appmain'>
                <div className='footer-app'>
                    <div> <FontAwesomeIcon className="footer-icon" icon={faWindows} />
                    </div>
                    <div> 
                        <small className='app-buy'>Download vai</small> <br />
                        <strong>WinStore</strong>
                    </div>
                </div>
               
            </div>
            <div className='footer-appmain'>
                <div className='footer-app'>
                    <div> <FontAwesomeIcon className="footer-icon" icon={faPaypal} />
                    </div>
                    <div> 
                        <small className='app-buy'>Download vai</small> <br />
                        <strong>PayPal</strong>
                    </div>
                </div>
               
            </div>
            </div>
        </div>



    </Col>
  </Row>
</Container>
        </div>
        </div>
    );
};

export default Footer;