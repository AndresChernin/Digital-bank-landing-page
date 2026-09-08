function UpperDigitalBank({logo_link, icon_link1, icon_link2}){
    const[showMenu, setShowMenu]=React.useState(false);
    return(
        <header className="upper-digital-bank-part">
          
             <div className="upper-digital-bank-inner-part-mobile">
               <img src={logo_link}  alt="image of logo"/>
             {!showMenu ?
                   (
                   <button 
                   type="button"
                   className="open-menu-button"
                   onClick={() => setShowMenu(true)}
                   aria-label="Open navigation"
                   aria-expanded={showMenu}
                   aria-controls="mobile-navigation">
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
                   (<button
                      type="button"
                      className="close-menu-button"
                      onClick={() => setShowMenu(false)}
                      aria-label="Close navigation"
                      aria-expanded={showMenu}
                      aria-controls="mobile-navigation"
                    >
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
               <nav
    className="upper-digital-bank-info-part"
    aria-label="Main navigation"
>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <a href="#blog">Blog</a>
    <a href="#careers">Careers</a>
</nav>
               <button className="upper-request-button">
                      Request Invite
              </button>
           </div> 
         
        </header>
    )
}