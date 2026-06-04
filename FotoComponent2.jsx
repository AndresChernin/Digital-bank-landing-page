function FotoComponent2({background_foto_link, inner_foto_link}){
    return(
        <article className="foto-part">
            <div className="foto-part-upper-part">
            <img src={background_foto_link} className="bg-foto-part"   alt="image of big foto"/>
            </div>
               
               <img src={inner_foto_link} className="inner-foto-part"   alt="image of inner foto"/>
           

           <div className="foto-part-lower-part">
            <div className="foto-part-lower-part-inner-container">
                <h1 className="foto-part-h-part">Next generation digital banking</h1>
                <p className="foto-part-p-part">Take your financial life online. Your Digitalbank account 
                    will be a one-stop-shop for spending, saving, budgeting, 
                    investing, and much more.</p>

                <button className="foto-part-button-part">
                 <p className="button-part-p">Request Invite</p>
                </button>
            </div>
           </div>
         
        </article>
    )
}