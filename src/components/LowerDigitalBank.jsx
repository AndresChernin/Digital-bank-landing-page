function LowerDigitalBank({logo_link,icon1,icon2,icon3,icon4,icon5}){
    return(
        <footer className="lower-digital-bank-part">
           <div className="lower-digital-bank-inner-part">
              <div className="lower-bank-inner-part-digi-part">
                 <img src={logo_link}  alt="image of logo"/>
                 <div className="lower-bank-icons-part">
                  <img src={icon1}  alt="facebook icon"/>
                  <img src={icon2}  alt="youtube icon"/>
                  <img src={icon3}  alt="twitter icon"/>
                  <img src={icon4}  alt="pinterest icon"/>
                  <img src={icon5}  alt="instagram icon"/>
                 </div>
              </div>
              <nav className="lower-bank-info-part">
                  <div className="lower-bank-info-upper-part">
                   <a href="#about">About us</a>
                    <a href="#contact">Contact</a>
                    <a href="#blog">Blog</a>
                  </div>
                  <div className="lower-bank-info-lower-part">
                     <a href="#careers">Careers</a>
                     <a href="#careers">Support</a>
                     <a href="#careers">Private Policy</a>
                  </div>
              </nav>
              <div className="lower-bank-button-part">
                <button className="request-button">
                  Request Invite   
                </button>
                <p className="footer-part">© Digitalbank. All Rights Reserved</p>
              </div>
               
               
           </div> 
         
        </footer>
    )
}