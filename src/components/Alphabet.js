// Component to build the alphabet/icons called from Body component with props 

// includes button and event listener to check if correct for each letter as mapped.
// each letter is overlaid the icon in the same <div>

const Alphabet = ({ alphabet, checkLetter }) => {
  return (
    <div>
      <div className="icon">
        <button
          className="button"
          name="alpha-button"
          id={alphabet}
          onClick={() => checkLetter(alphabet)}
        >
        {alphabet}
        </button>
      </div>
    </div>
  );
};

export default Alphabet;
