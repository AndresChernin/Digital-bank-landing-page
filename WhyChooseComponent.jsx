function WhyChooseComponent({img_link,h3_tag,p_tag}){
    return(
      <article className="why-choose-component"> 
            <img src={img_link} className="img-part" alt="img of h3-tag"/>
            <h3 className="h3-tag">{h3_tag}</h3>
            <p>{p_tag}</p>
      </article> 
    )
}