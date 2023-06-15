import React from "react";
import { SocialIcon } from 'react-social-icons'

const QuoteCard = ({quote}) => {
   
    let url = 'https://twitter.com/intent/tweet?text=' + '"' + quote.quote + '"' + '-' + quote.author;

    return (
        <div id='quote-box'>
            <h2>Random Quote Generator</h2>
            <h3 id='text'>{quote.quote}</h3>
            <h3 id='author'>{quote.author}</h3>
            <a href={url} id='tweet-quote'>
                <SocialIcon network="twitter" bgColor="#ff5a01" fgColor="#ff5a01"/>
            </a>
        </div>
    )
}

export default QuoteCard;