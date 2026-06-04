function ArticlesSection({data}){
    return(
        <article className="articles-part">
            <h2>Latest Articles</h2>
            <div className="part-with-articles">
                {data.map(
                    (element, index) => (<ArticleComponent
                                         key={index}
                                         img_link={element.img_link}
                                         p_autor={element.p_autor}
                                         p_title={element.p_title}
                                         p_text={element.p_text}
                                         />  
                    ))
                }
            </div>
        </article>
    )
}