import React from 'react';
import './ChatLayout.css';
import ChatList from '../components/chat/ChatList';
import Sidebar from '../components/chat/Sidebar';
import ChatWindow from '../components/chat/ChatWindow';

const ChatLayout: React.FC = () => {
  return (
    <div className="chat-layout">
      {/*  Sidebar Component */}
      <div >
        <Sidebar />

      </div>

      <div className="chat-main" >
        {/*  ChatList Component */}
        <div >
          <ChatList />
        </div>

        {/*  ChatWindow Component */}
        <div style={{ padding: '20px', flex: 1 }}>
          <ChatWindow />

        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
