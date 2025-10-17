window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  const status = document.getElementById('status');
  const newGameBtn = document.querySelector('.btn');
  let currentPlayer = 'X';
  let gameActive = true;

  // Exercise 1: Layout the board
  squares.forEach(square => {
    square.classList.add('square');

    // 🖱️ Exercise 3: Hover effect
    square.addEventListener('mouseover', () => {
      if (gameActive && square.textContent === '') {
        square.classList.add('hover');
      }
    });

    square.addEventListener('mouseout', () => {
      square.classList.remove('hover');
    });

    // Exercise 2 & 6: Add X or O
    square.addEventListener('click', () => {
      if (gameActive && square.textContent === '') {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        if (checkWinner()) {
          status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
          status.classList.add('you-won');
          gameActive = false;
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    });
  });

  // Exercise 5: Restart game
  newGameBtn.addEventListener('click', () => {
    squares.forEach(square => {
      square.textContent = '';
      square.classList.remove('X', 'O');
    });
    status.textContent = 'Move your mouse over a square and click to play an X or an O.';
    status.classList.remove('you-won');
    currentPlayer = 'X';
    gameActive = true;
  });

  // Exercise 4: Check for winner
  function checkWinner() {
    const winPatterns = [
      [0,1,2], [3,4,5], [6,7,8], 
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6]           
    ];
    return winPatterns.some(pattern => {
      const [a, b, c] = pattern;
      return squares[a].textContent === currentPlayer &&
             squares[b].textContent === currentPlayer &&
             squares[c].textContent === currentPlayer;
    });
  }
});
