import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import './Topbar.scss';

const Topbar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="container">
      <Link to="/">
        <LogoSvg className="topbar__logo" />
      </Link>
      <div className="topbar__group">
        <div className="topbar__icon">
          <Link to="/users">
            <i className="fas fa-users"></i>
            <span>Usuários</span>
          </Link>
        </div>
        <div className="topbar__icon">
          <Link to="/newuser">
            <i className="fas fa-user-plus"></i>
            <span>Nova Conta</span>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Topbar;
