import React from 'react';
import Header from '../../components/Header/Header';
import './Uploads.css';


const Uploads: React.FC = () => {
  return (
    <div className="uploads">
      <Header 
        activePage="uploads" 
        userName="Иван Петров" 
        userStatus="Подтверждён"
        userInitials="ИП"
      />
      {/* Основной контейнер с белым фоном */}
      <div className="uploads-container">
        <h1 className="page-title2">Загрузки</h1>

        {/* Контейнер с блюдами и документами */}
        <div className="content-wrapper">
          {/* Блок с блюдами - три колонки */}
          <div className="dishes-wrapper">
            <h2 className="dishes-main-title">Блюда</h2>
            <div className="dishes-columns">
              {/* Колонка блюда 1 */}
              <div className="dish-column">
                <div className="dish-header">
                  <h3 className="dish-title">Dish 1</h3>
                  <span className="dish-counter">2/2</span>
                </div>
                
                <div className="readiness-block">
                  <span className="readiness-label">Готовность 100%</span>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className="materials-list">
                  <div className="material-item">
                    <span className="material-name">TK</span>
                    <span className="material-format">PDF/DOC</span>
                  </div>
                  <div className="material-item">
                    <span className="material-name">Фото</span>
                    <span className="material-format">JPG/PNG</span>
                  </div>
                </div>
              </div>

              {/* Колонка блюда 2 */}
              <div className="dish-column">
                <div className="dish-header">
                  <h3 className="dish-title">Dish 2</h3>
                  <span className="dish-counter">1/2</span>
                </div>
                
                <div className="readiness-block">
                  <span className="readiness-label">Готовность 50%</span>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '50%' }}></div>
                  </div>
                </div>

                <div className="materials-list">
                  <div className="material-item">
                    <span className="material-name">TK</span>
                    <span className="material-format">PDF/DOC</span>
                  </div>
                  <div className="material-item">
                    <span className="material-name">Фото</span>
                    <span className="material-format">JPG/PNG</span>
                  </div>
                </div>
              </div>

              {/* Колонка блюда 3 */}
              <div className="dish-column">
                <div className="dish-header">
                  <h3 className="dish-title">Dish 3</h3>
                  <span className="dish-counter">0/2</span>
                </div>
                
                <div className="readiness-block">
                  <span className="readiness-label">Готовность 0%</span>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '0%' }}></div>
                  </div>
                </div>

                <div className="materials-list">
                  <div className="material-item">
                    <span className="material-name">TK</span>
                    <span className="material-format">PDF/DOC</span>
                  </div>
                  <div className="material-item">
                    <span className="material-name">Фото</span>
                    <span className="material-format">JPG/PNG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Блок документов - вертикальный справа */}
          <div className="documents-block">
            <h2 className="documents-block-title">Документы</h2>
            
            <div className="documents-card">
              <h3 className="documents-card-title">Командные документы</h3>
              <div className="documents-number">1</div>
              <p className="documents-description">
                Паспорта, согласия, допуски, справки
              </p>
              <button className="documents-btn">Открыть документы</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploads;