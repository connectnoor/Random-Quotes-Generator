let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('button-quote');
let tweetBtn = document.getElementById('tweet-btn');

let apiUrl = "https://dummyjson.com/quotes/random";
async function generateQuote() {
    let response = await fetch(apiUrl);
    let data = await response.json();
    quote.innerHTML = `"${data.quote}"`;
    author.innerHTML = `"${data.author}"`;

    console.log(data)
}
generateQuote()

btn.addEventListener('click', generateQuote);
