const loadQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuotes(data));
};

const displayQuotes = (quote) => {
  const blockquote = document.getElementById("quote");
  blockquote.innerText = quote.quote;
};
