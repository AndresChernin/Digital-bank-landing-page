function WhyChooseSection({data}){
    return(
        <section className="why-choose-section">
            <div className="introduction-part">
             <h2 className="h2-part">Why choose Digitalbank?</h2>
             <p>We leverage Open Banking to turn your bank account into your
                 financial hub. Control your finances like never before.</p>
            </div>
            <div className="part-with-components">
                {data.map((element, index) => (
        <WhyChooseComponent
            key={index}
            img_link={element.img_link}
            h3_tag={element.h3_tag}
            p_tag={element.p_tag}
        />  
                ))
                }
              
            </div>
        </section>
    )
}