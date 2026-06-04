function LowerDigitalBank({logo_link,icon1,icon2,icon3,icon4,icon5}){
    return(
        <article className="lower-digital-bank-part">
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
              <div className="lower-bank-info-part">
                  <div className="lower-bank-info-upper-part">
                   <p>About us</p>
                   <p>Contact</p>
                   <p>Blog</p>
                  </div>
                  <div className="lower-bank-info-lower-part">
                     <p>Careers</p>
                     <p>Support</p>
                     <p>Privacy Policy</p>
                  </div>
              </div>
              <div className="lower-bank-button-part">
                <button className="button-container">
                 <p className="button-part-p">Request Invite</p>
                </button>
                <p className="footer-part">© Digitalbank. All Rights Reserved</p>
              </div>
               
               
           </div> 
         
        </article>
    )
}