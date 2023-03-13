// Header simply is component to hold the header but would likely grow in complexity so kept separate
// Also makes logical sense to have such an important, recuurent feature if expands.

import logo from '../images/logo.png'

const Header = () => {
    return (
      <div>
        <header className="header-container">
          <img alt="Hangman-utan game" src={logo} />
        </header>
      </div>
    );
};

export default Header;
