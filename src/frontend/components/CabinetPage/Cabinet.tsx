import React from 'react';
import "./Cabinet.css";

const Cabinet: React.FC = () => {
  return (
    <div className="cabinet">

      {/* Основной контент */}
      <main className="cabinet-content">
        {/* Три выпуклых карточки */}
        <div className="cards-row">
          {/* Карточка статуса регистрации */}
          <div className="info-card">
            <h3 className="card-title">Статус регистрации</h3>
            <div className="status-list">
              <div className="status-item">
                <span className="status-label">Аккаунт</span>
                <span className="status-value confirmed">подтвержден</span>
              </div>
              <div className="status-item">
                <span className="status-label">Документы</span>
                <span className="status-value pending">на проверке</span>
              </div>
              <div className="status-item">
                <span className="status-label">Материалы</span>
                <span className="status-value">загружаются отдельно</span>
              </div>
            </div>
            <button className="card-btn">Перейти к загрузкам</button>
          </div>

          {/* Карточка команды */}
          <div className="info-card">
            <h3 className="card-title">Команда</h3>
            <div className="team-info">
              <h4 className="team-name">Hot Kitchen</h4>
              <div className="team-detail">
                <span className="detail-label">Статус:</span>
                <span className="detail-value">сформирована организацией</span>
              </div>
              <div className="team-detail">
                <span className="detail-label">Тренер:</span>
                <span className="detail-value">Иван Петров Петрович</span>
              </div>
            </div>
            <button className="card-btn">Открыть команду</button>
          </div>

          {/* Карточка результатов */}
          <div className="info-card">
            <h3 className="card-title">Результаты</h3>
            <div className="results-info">
              <div className="result-item">
                <span className="result-label">Ср. по судьям:</span>
                <span className="result-value">89.89/100</span>
              </div>
              <div className="result-item">
                <span className="result-label">Итог (с учетом штрафов):</span>
                <span className="result-value">84.89</span>
              </div>
              <div className="result-item">
                <span className="result-label">Место:</span>
                <span className="result-value place">2</span>
              </div>
            </div>
            <button className="card-btn">Смотреть разбаловку</button>
          </div>
        </div>

        {/* Чек-лист материалов */}
        <section className="checklist-section">
          <h2 className="section-title">Чек-лист материалов</h2>
          <div className="checklist-grid">
            <div className="dish-checklist">
              <h4>Блюдо 1</h4>
              <ul>
                <li>Технологическая карта PDF/DOC</li>
                <li>Фото блюда JPG/PNG</li>
              </ul>
            </div>
            <div className="dish-checklist">
              <h4>Блюдо 2</h4>
              <ul>
                <li>Технологическая карта PDF/DOC</li>
                <li>Фото блюда JPG/PNG</li>
              </ul>
            </div>
            <div className="dish-checklist">
              <h4>Блюдо 3</h4>
              <ul>
                <li>Технологическая карта PDF/DOC</li>
                <li>Фото блюда JPG/PNG</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cabinet;