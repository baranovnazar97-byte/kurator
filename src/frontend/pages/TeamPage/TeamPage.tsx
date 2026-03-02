import React from 'react';
import Header from '../../components/Header/Header';
import Team from '../../components/Team/Team';
import './TeamPage.css';

const TeamPage: React.FC = () => {
  // Данные для компонентов
  const teamData = {
    name: 'Hot Kitchen',
    members: [
      {
        id: 1,
        name: 'Иван Петров',
        role: 'Участник',
        status: 'Подтверждён',
        avatar: 'ИП'
      },
      {
        id: 2,
        name: 'Мария Смирнова',
        role: 'Участник',
        status: 'Подтверждён',
        avatar: 'МС'
      }
    ]
  };

  return (
    <div className="team-page">
      <Header 
        activePage="team" 
        userName="Иван Петров" 
        userStatus="Подтверждён"
        userInitials="ИП"
      />
      <main className="team-content">
        <Team teamName={teamData.name} members={teamData.members} />
      </main>
    </div>
  );
};

export default TeamPage;