import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TonConnectButton } from '@tonconnect/ui-react';
import './Nav.css'; // Make sure to import the external CSS

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar transition duration-300 ease-in-out hover:bg-slate-600">
      <section className="relative mx-auto">
        <nav className="navbar-content">
          <a className="navbar-brand text-sky-400">Ignitus Networks</a>
          <ul className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
            <Link className='no-underline text-gray-200' to="/" onClick={toggleMenu}>
              <li>Home</li>
            </Link>
            <Link className='no-underline text-gray-200' to="/all-nft" onClick={toggleMenu}>
              <li>All NFT</li>
            </Link>
            <Link className='no-underline text-gray-200' to="/create" onClick={toggleMenu}>
              <li>Mint NFT</li>
            </Link>
          </ul>
          <div className="navbar-button">
            <TonConnectButton />
            <div className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Nav;
