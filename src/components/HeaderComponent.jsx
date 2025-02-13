import React from 'react';
import './Header.css';

function HeaderComponent() {
  return (
    <header className="header">
      <nav className="main-menu">
        <h2>DEMO Streaming</h2>
        <div className="menu-buttons">
          <button>Login</button>
          <button>Start your free trial</button>
        </div>
      </nav>
      <nav className="sub-menu">
        <h2>Títulos Populares</h2>
      </nav>
    </header>
  );
}

export default HeaderComponent;