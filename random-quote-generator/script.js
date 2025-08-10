// Array that store a list of quotes the their author

const quotes = [
    {
        text : "You know, Hobbes, some days even my lucky rocketship underpants don't help.",
        author: "Bill Watterson"
    },
    {
        text : "Even if we don't have the power to choose where we come from, we can still choose where we go from there",
        author : "Stephen Chbosky"
    },
    {
        text : "And now that you don't have to be perfect, you can be good",
        author : "Jogn Steinbeck"
    },
    {
        text : "Outside the windows the day was bright: golden sunshine, bule sky, pleasant wind... I wanted to punch the happy day in the face, grap it by the hait, and beat it until it told me what the hell it was so happy about",
        author : "Ilona Andrews"
    }
]

// get HTML element by their id
const quoteText = document.getElementById("quote")
const quoteAuthor = document.getElementById("author")
const newQuote = document.getElementById("new-quote")

// function to generate a random quote
function generateQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]

    // Update the quote text an author in the HTML element
    quoteText.textContent = `"${randomQuote.text}"`
    quoteAuthor.textContent = `- ${randomQuote.author}`
}

// Add event listener for the button.
newQuote.addEventListener('click', generateQuote)

// Call generate quote when page first loaded
generateQuote()