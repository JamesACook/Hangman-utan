//The App component simply brings together the header and body to pass to index.js

import Body from "./components/Body";
import Header from "./components/Header";

function App() {

  return (
    <div className="main-container">
      <Header />
      <Body />
    </div>
  );
}

export default App;
