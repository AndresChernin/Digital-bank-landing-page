function ArticlesSection({data}){
    return(
        <article className="articles-part">
            <h2>Latest Articles</h2>
            <div className="part-with-articles">
                {data.map(
                    (element, index) => (<ArticleComponent
                                         key={index}
                                         image={element.img_link}
                                         autor={element.p_autor}
                                         title={element.p_title}
                                         text={element.p_text}
                                         />  
                    ))
                }
            </div>
        </article>
    )
}