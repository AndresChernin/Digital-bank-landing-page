function ArticleComponent({image,autor,title,text}){
    return(
        <article className="article-part">
            <img src={image} className="article-img-part" alt="img of h3-tag"/>
            <p className="article-part-autor">{autor}</p>
            <h3 className="article-part-title">{title}</h3>
            <p className="article-part-text">{text}</p>
        </article>
    )

}