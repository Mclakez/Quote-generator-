const quote = document.getElementById("quote")
const author = document.getElementById("author")
const newQuote = document.getElementById("newQuote")
const tweetBtn = document.getElementById("tweet")

const api_url = "https://api.quotable.io/quotes/random"

async function getQuote(url) {
    const response = await fetch(url)
    var data = await response.json()
    quote.innerHTML = data[0].content
    author.innerHTML = data[0].author
}

newQuote.addEventListener("click" , () => {
    getQuote(api_url)
})

tweetBtn.addEventListener("click" , () => {
    tweet()
})

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "--- by " + author.innerHTML,"Tweet Window", "width=600, height = 300") 
}