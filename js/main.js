var quotes = [
    {
        author:"Oscar Wilde",
        quote:"Be yourself; everyone else is already taken."
    },
    {
        author:"Albert Einstein",
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
        author:"Frank Zappa",
        quote:"So many books, so little time."
    },
    {
        author:"Gordon A. Eadie",
        quote:"If you don't stand for something you will fall for anything."
    }
];

var lastRandomIndex = 0;
var randomIndex = 0;

function getQuote(){
    
    randomIndex = Math.floor( Math.random() * quotes.length );

    do {
        randomIndex = Math.floor( Math.random() * quotes.length );
    } while (randomIndex == lastRandomIndex)
    
    lastRandomIndex = randomIndex;


    document.getElementById('quote').innerHTML = `“${quotes[randomIndex].quote}”`;
    document.getElementById('author').innerHTML = `― ${quotes[randomIndex].author}`;

    console.log(lastRandomIndex);

}


