const factElement = document.getElementById('fact');
const newFactButton = document.getElementById('newFactBtn');
const copyButton = document.getElementById('copyBtn');

// Function to fetch a random useless fact
function fetchFact() {
    factElement.textContent = '⏳ Fetching a fun fact...';

    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en', {
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        factElement.textContent = `"${data.text}"`;
    })
    .catch(error => {
        console.error('Error fetching fact:', error);
        factElement.textContent = '⚠️ Failed to load fact. Please try again.';
    });
}

// Function to copy fact to clipboard
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(factElement.textContent).then(() => {
        copyButton.innerHTML = '<i class="fas fa-check"></i>'; // Change icon
        setTimeout(() => {
            copyButton.innerHTML = '<i class="fas fa-copy"></i>'; // Reset icon
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
});

// Fetch a new fact on button click
newFactButton.addEventListener('click', fetchFact);

// Fetch a fact when the page loads
fetchFact();
