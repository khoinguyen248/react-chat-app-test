import React from 'react';
import { useChat } from '../../context/ChatContext';
import { FiMessageSquare, FiCalendar, FiFileText, FiSettings, FiTag, FiHome } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar: React.FC = () => {

  const { state } = useChat()
  const currentUser = state.users.find(u => u.id === '1')
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        {/* Avatar  - Tên*/}
        <img src={currentUser?.avatar} alt="..." className="avatar" />
        <span className="profile-name">{currentUser?.name}</span>
      </div>

      <nav className="sidebar-nav">
        <a href="#" className="nav-item"><FiHome className="icon" /> <p>Properties</p></a>
        <a href="#" className="nav-item active"><FiMessageSquare className="icon" /> <p>Chat</p></a>
        <a href="#" className="nav-item"><FiCalendar className="icon" /> <p>Calendar</p></a>
        <a href="#" className="nav-item"><FiTag className="icon" /> <p>Offers</p></a>
        <a href="#" className="nav-item"><FiFileText className="icon" /> <p>Documents</p></a>
        <a href="#" className="nav-item"><FiSettings className="icon" /> <p>Settings</p></a>
      </nav>
    </div>
  );
};

export default Sidebar;
