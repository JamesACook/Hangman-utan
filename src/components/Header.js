// Header component that also contains 'Help' button. A user can toggle between displaying the rules or hiding it.

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
