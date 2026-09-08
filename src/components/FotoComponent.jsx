function FotoComponent({background_foto_mobile,background_foto_desktop, inner_foto_link}){
    return(
        <article className="foto-part">
            <div className="mobile-hero">
               <div className="foto-part-upper-part">
                 <img src={background_foto_mobile} className="bg-foto-part"   alt="image of big foto"/>
           
               
                 <img src={inner_foto_link} className="inner-foto-part"   alt="image of inner foto"/>
               </div>
            </div>
            <div className="desktop-hero">
                <div className="foto-part-upper-part">
                  <img src={background_foto_desktop} className="bg-foto-part"   alt=""/>
           
                </div>
               <img src={inner_foto_link} className="inner-foto-part"   alt=""/>
           
            </div>
          
           <div className="foto-part-lower-part">
            <div className="foto-part-lower-part-inner-container">
                <h1 className="foto-part-h-part">Next generation digital banking</h1>
                <p className="foto-part-p-part">Take your financial life online. Your Digitalbank account 
                    will be a one-stop-shop for spending, saving, budgeting, 
                    investing, and much more.</p>

                 <button className="upper-request-button">
                      Request Invite
              </button>
            </div>
           </div>
         
        </article>
    )
}