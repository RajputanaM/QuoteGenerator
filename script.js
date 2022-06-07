var quotes = [{
    quote: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    source: "@Dr. Seuss"
},
{
    quote: "Keep your eyes on the stars and your feet on the ground.",
    source: "@Theodore Roosevelt"
},
{
    quote: "The only person you should try to be better than is the person you were yesterday.",
    source: "@Matty Mullins"
},
{
    quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
    source: "@Harvey Fierstein"
},
{
    quote: "Life's too mysterious to take too serious.",
    source: "@Mary Engelbreit"
},
{
    quote: "If you want to go fast, go alone. If you want to go far, go together.",
    source: "@African proverb"
},
{
    quote: "Believe you can and you're halfway there.",
    source: "@T. Roosevelt"
},
{
    quote: "Ask yourself if what you're doing today will get you closer to where you want to be tomorrow.",
    source: "@Paulo Coelho"
},
{
    quote: "The action of today becomes the destiny of tmorrow.",
    source: "@Swami Chinmayananda."
},
{
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: "@Mahatma Ghandi"
},
{
    quote: "Do what you can, with what you have, where you are.",
    source: "@ Theodore Roosevelt"
},
{
    quote: "If you cannot do great things, do small things in a great way.",
    source: "@Napoleon Hill"
},
{
    quote: "Wise men speak because they have something to say; fools because they have to say something.",
    source: "@Plato"
},
{
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
    source: "@Maya Angelou"
},
{
    quote: "Change your thoughts and you change your world.",
    source: "@Norman Vincent"
},
{
    quote: "We become what we think about.",
    source: "@Earl Nightingale."
}
];

console.log("monu");

function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length)); //this will return a value form 0 to length-1.
    var randomQuote = quotes[randomNumber];
    return randomQuote;
}

//Constructs a string containing the different properties of the quote object 
function printQuote() {
    var quotes = getRandomQuote();
    document.getElementById("sources").innerHTML = quotes.quote;
    document.getElementById("demo").innerHTML = quotes.source;
}

printQuote();