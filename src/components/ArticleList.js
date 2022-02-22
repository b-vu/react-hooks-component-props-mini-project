import React from "react";
import Article from "./Article";

const ArticleList = ({posts}) => {
    return(
        <main>
            {
                posts.map(post => {
                    return(
                        <Article title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} key={post.id}></Article>
                    )
                })
            }
        </main>
    );
}

export default ArticleList;