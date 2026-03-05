import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: 'ivan.petrov@example.com',
    password: '',
    fullName: '',
    phone: '',
    city: '',
    organization: ''
  });
  
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', { ...formData, mode: isLogin ? 'login' : 'register' });
    
    // Сохраняем данные пользователя
    localStorage.setItem('userEmail', formData.email);
    if (formData.fullName) {
      localStorage.setItem('userName', formData.fullName);
    }
    
    // Перенаправляем в кабинет
    navigate('/cabinet');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="login-page">
      <h1 className="page-title">Кабинет участника</h1>
      
      <div className="login-container">
        <div className="toggle-container">
          <div className="toggle-switch">
            <button 
              className={`toggle-option ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Вход
            </button>
            <button 
              className={`toggle-option ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Регистрация
            </button>
            <div className={`toggle-slider ${isLogin ? 'left' : 'right'}`}></div>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="fullName">ФИО</label>
              <input
                id="fullName"
                className='input'
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Введите ваше ФИО"
                required={!isLogin}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className='input'
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Введите ваш email"
              required
            />
          </div>

          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  id="phone"
                  className='input'
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Введите ваш телефон"
                  required={!isLogin}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">Город</label>
                <input
                  id="city"
                  className='input'
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Введите ваш город"
                  required={!isLogin}
                />
              </div>

              <div className="form-group">
                <label htmlFor="organization">Учреждение / организация</label>
                <input
                  id="organization"
                  className='input'
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Введите ваше учреждение или организацию"
                  required={!isLogin}
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              className='input'
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Введите ваш пароль"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;