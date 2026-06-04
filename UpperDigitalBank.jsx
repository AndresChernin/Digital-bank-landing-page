function UpperDigitalBank({logo_link, icon_link1, icon_link2}){
    const[showMenu, setShowMenu]=React.useState(false);
    return(
        <article className="upper-digital-bank-part">
          
             <div className="upper-digital-bank-inner-part-mobile">
               <img src={logo_link}  alt="image of logo"/>
             {!showMenu ?
                   (<img src={icon_link1} 
                        className="icon-part1"  
                        alt="image of icon"
                        onClick={()=>setShowMenu(true)}/>
                   ):
                   (<img src={icon_link2} 
                         className="icon-part2"  
                         alt="image of icon"
                         onClick={()=>setShowMenu(false)}/>
                   )
              }
             </div>
             {showMenu &&(
              <div className="menu-part">
                 <p>Home</p>
                 <p>About</p>
                 <p>Contact</p>
                 <p>Blog</p>
                 <p>Careers</p>
               </div>
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
               <button className="button-container">
                 <p className="button-part-p">Request Invite</p>
                </button>
           </div> 
         
        </article>
    )
}