function ArticleComponent({img_link,p_autor,p_title,p_text}){
    return(
        <article className="article-part">
            <img src={img_link} className="article-img-part" alt="img of h3-tag"/>
            <p className="article-part-autor">{p_autor}</p>
            <h3 className="article-part-title">{p_title}</h3>
            <p className="article-part-text">{p_text}</p>
        </article>
    )

}