// app.js

const halfCrosswordGrid = document.getElementById('halfCrosswordGrid');
let words = [];

function addWord() {
  const wordInput = document.getElementById('word');
  const word = wordInput.value.trim();
  if (word !== '') {
    words.push(word);
    wordInput.value = '';
    renderHalfCrosswordGrid();
  }
}

function renderHalfCrosswordGrid() {
  halfCrosswordGrid.innerHTML = '';
  words.forEach((word) => {
    const halfCrossword = document.createElement('div');
    halfCrossword.className = 'half-crossword';
    halfCrossword.textContent = word;
    halfCrosswordGrid.appendChild(halfCrossword);
  });
}

// Call the renderHalfCrosswordGrid() function when the page loads
renderHalfCrosswordGrid();
