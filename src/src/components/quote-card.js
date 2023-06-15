import React from "react";

const QuoteCard = ({quote}) => {
    let url = 'https://twitter.com/intent/tweet?text=' + '"' + quote.quote + '"' + '-' + quote.author;
    return (
        <div>
            <h2>This is the quote card</h2>
            <h3>{quote.quote}</h3>
            <h3>{quote.author}</h3>
            <a href={url}>Tweet this</a>
        </div>
    )
}

export default QuoteCard;