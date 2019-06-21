import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return(
    <div className="header">
      <Link to="/">Главная</Link>
      <Link to="/news">Новости</Link>
      <Link to="/profile">Профиль</Link>
    </div>
  );
}

export default Header;
