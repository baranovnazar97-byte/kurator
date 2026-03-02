import React from 'react';
import Header from '../../components/Header/Header';
import Cabinet from '../../components/CabinetPage/Cabinet';
import '../../components/CabinetPage/Cabinet.css';

const CabinetPage: React.FC = () => {
  return (
    <div className="cabinet-page">
      <Header 
        activePage="main" 
        userName="Иван Петров" 
        userStatus="Подтверждён"
        userInitials="ИП"
      />
      <Cabinet />
    </div>
  );
};

export default CabinetPage;