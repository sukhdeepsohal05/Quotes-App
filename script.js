const api = "https://api.quotable.io/random";
let realData = '';
const text = document.querySelector('.text');
const author = document.querySelector('.author');
const newQuoteBtn = document.querySelector('.newQuoteBtn');
const copyBtn = document.querySelector('.copyBtn');
const twitterBtn = document.querySelector('.twitterBtn');

const getQuotes = async () =>{
    try {
        newQuoteBtn.innerHTML = 'Loading Quote...';
        newQuoteBtn.classList.add('loading');
        let data = await fetch(api);
        realData = await data.json();
        
        text.innerHTML = `"${realData.content}"`;
        author.innerHTML = `--${realData.author}`;
        newQuoteBtn.innerHTML = 'New Quote';
        newQuoteBtn.classList.remove('loading');
        
    } catch (error) {
        
    }
}

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(`${text.innerHTML} by ${realData.author}`);
});

twitterBtn.addEventListener('click', () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${text.innerHTML}`;
    window.open(tweetPost);
});

getQuotes();
newQuoteBtn.addEventListener('click', getQuotes);