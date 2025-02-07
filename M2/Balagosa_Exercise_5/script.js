const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('newQuoteBtn');
const copyQuoteButton = document.getElementById('copyQuoteBtn');
const twitterShareButton = document.getElementById('twitterShareBtn');

// Function to fetch a random quote
function fetchQuote() {
    // Show loading message while fetching
    quoteElement.textContent = 'Loading quote...';
    authorElement.textContent = '';

    // Fetch quotes from the DummyJSON API
    fetch('https://dummyjson.com/quotes')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Get a random quote from the list
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            const randomQuote = data.quotes[randomIndex];

            // Display the quote and author
            quoteElement.textContent = `"${randomQuote.quote}"`;
            authorElement.textContent = `- ${randomQuote.author}`;

            // Update Twitter share link
            const twitterText = encodeURIComponent(`"${randomQuote.quote}" - ${randomQuote.author}`);
            twitterShareButton.href = `https://twitter.com/intent/tweet?text=${twitterText}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to load quote. Please try again.';
            authorElement.textContent = '';
        });
}

// Function to copy the quote to clipboard
function copyQuote() {
    const textToCopy = `${quoteElement.textContent} ${authorElement.textContent}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Quote copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy quote:', err);
    });
}

// Event listeners
newQuoteButton.addEventListener('click', fetchQuote);
copyQuoteButton.addEventListener('click', copyQuote);

// Fetch a quote when the page loads
fetchQuote();
