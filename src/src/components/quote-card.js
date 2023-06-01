const QuoteCard = ({quote}) => {
    return (
        <div>
            <h2>This is the quote card</h2>
            <h3>{quote.quote}</h3>
            <h3>{quote.author}</h3>
        </div>
    )
}

export default QuoteCard;