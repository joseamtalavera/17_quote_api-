const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res) => {
    //console.log('Request received for random quote');
    const quote = getRandomElement(quotes);
    res.json(quote);
})


app.get('/api/quotes', (req, res) => {
    const person = req.query.person;

    if(person) {
        const filteredQuotes = quotes.filter(quote => quote.person.toLowerCase() === person.toLowerCase());
        res.json({quotes: filteredQuotes});
    } else {
        res.json ({quotes: quotes});
    }
});

app.post('/api/quotes', (req, res) => {
    const {quote, person} = req.query;

    //lets check if the quote and the property exists
    if(!quote || !person) {
        res.status(400).json({error: 'Both quote and person are requiered.'});
        return;
    }

    //create a new quote object
    const newQuote = {quote, person};

    //add the new quote to the data array
    quotes.push(newQuote);

    //send back a response with the new quote object
    res.status(201).json({quote: newQuote});

});






app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})