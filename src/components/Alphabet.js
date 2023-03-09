// Component to build the alphabet called from Body component

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
