function UpperDigitalBank({logo_link, icon_link1, icon_link2}){
    const[showMenu, setShowMenu]=React.useState(false);
    return(
        <article className="upper-digital-bank-part">
          
             <div className="upper-digital-bank-inner-part-mobile">
               <img src={logo_link}  alt="image of logo"/>
             {!showMenu ?
                   (
                   <button className="open-menu-button"
                   onClick={()=>setShowMenu(true)}>
                     <span className="open-menu-icon"
                       style={{
                              maskImage: `url(${icon_link1})`,
                              WebkitMaskImage: `url(${icon_link1})`
                             }}>

                    </span>
                    {/*
                   <img src={icon_link1} 
                        className="icon-part1"  
                        alt="image of icon"
                        />*/}
                    </button>   
                   ):
                   (<button className="close-menu-button"
                     onClick={()=>setShowMenu(false)}>
                      <span className="close-menu-icon"
                       style={{
                              maskImage: `url(${icon_link2})`,
                              WebkitMaskImage: `url(${icon_link2})`
                             }}>

                    </span>
                    {/*  
                   <img src={icon_link2} 
                         className="icon-part2"  
                         alt="image of icon"
                         />*/}
                    </button>
                   )
              }
             </div>
             {showMenu &&(
              <nav
    className="menu-part"
    id="mobile-navigation"
    aria-label="Main navigation"
  >
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <a href="#blog">Blog</a>
    <a href="#careers">Careers</a>
  </nav>
             )}
               
             
           
           <div className="upper-digital-bank-inner-part-desktop">
               <img src={logo_link}  alt="image of logo"/>
               <div className="upper-digital-bank-info-part">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Blog</p>
                <p>Careeres</p>
               </div>
               <button className="upper-request-button">
                      Request Invite
              </button>
           </div> 
         
        </article>
    )
}