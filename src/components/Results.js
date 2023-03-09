// Component to display results called from the Body component.

// // Importing the useSelector function to select the required slices of state.
import { useSelector } from "react-redux";

const Results = () => {
  // get value of the 'result' from the slices of state
  const result = useSelector((state) => state.word.result);

  return (
    <div className="results-container">
      <p id="result">{result}</p>
    </div>
  );
};

export default Results;
