// Component to display the rules of the game or help.

const Help = () => {
  return (
    <div>
      <h4>How to Play:</h4>
      <div className="rules-list">
        <ul>
          <li>Click 'Start New Game' to begin.</li>
          <li>You must guess a word by clicking the letters displayed.</li>
          <li>The number of spaces indicates the word length.</li>
          <li>If your guess is correct, the letter position is revealed.</li>
          <li>If your guess is incorrect, a part of the hangman is drawn.</li>
          <li>After 10 incorrect guesses you lose.</li>
          <li>Guess all the letters correctly to win.</li>
          <li>
            Hint: e, a, r, i, o, t, n, s, l, c are the 10 most common letters in
            order.
          </li>
          <li>After a few guesses it's more about deduction.</li>
          <li>This is beast mode hangman - hyphenated words included!</li>
        </ul>
      </div>
    </div>
  );
};

export default Help;
