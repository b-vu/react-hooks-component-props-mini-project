import React from "react";

const Article = ({ title, date="January 1, 1970", preview, minutes }) => {
    let coffeeString = "";
    let bentoString = "";
    if(minutes < 30){
        let numCups = minutes / 5;
        for(let i = numCups; i > 0; i--){
            coffeeString += "☕️";
        }
    }
    else{
        let numBento = minutes / 10;
        for(let i = numBento; i > 0; i--){
            bentoString += "🍱"
        }
    }

    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            {
                minutes < 30 ? <p>{coffeeString} {minutes} minute read</p>
                : <p>{bentoString} {minutes} minute read</p>
            }
        </article>
    );
}

export default Article;