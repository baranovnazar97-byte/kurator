import React from 'react';
import './Header.css';

interface HeaderProps {
  activePage: 'main' | 'team' | 'uploads' | 'results' | 'profile';
  userName: string;
  userStatus: string;
  userInitials: string;
}

const Header: React.FC<HeaderProps> = ({ activePage, userName, userStatus, userInitials }) => {
  return (
    <header className="cabinet-header">
      <h1 className="page-title">Кабинет участника</h1>
      <div className="header-nav">
        <nav className="main-nav">
          <a href="/cabinet" className={`nav-link ${activePage === 'main' ? 'active' : ''}`}>Главная</a>
          <a href="/team" className={`nav-link ${activePage === 'team' ? 'active' : ''}`}>Моя команда</a>
          <a href="/uploads" className={`nav-link ${activePage === 'uploads' ? 'active' : ''}`}>Загрузки</a>
          <a href="/results" className={`nav-link ${activePage === 'results' ? 'active' : ''}`}>Результаты</a>
          <a href="/profile" className={`nav-link ${activePage === 'profile' ? 'active' : ''}`}>Профиль</a>
        </nav>
        <div className="user-profile">
          <div className="user-avatar">
            {userInitials}
          </div>
          <div className="user-info">
            <span className="user-name">{userName}</span>
            <span className="user-status">{userStatus}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;