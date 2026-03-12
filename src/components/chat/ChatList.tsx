import React from 'react';
import { useChat } from '../../context/ChatContext';
import { formatTime } from '../../utils/formatTime';
import './ChatList.css';

const ChatList: React.FC = () => {
  // lấy state và dispatch 
  const { state, dispatch } = useChat();

  const getOtherUser = (participantIds: string[]) => {
    const otherId = participantIds.find(id => id !== '1');
    return state.users.find(u => u.id === otherId);
  };

  return (
    <div className="chat-list-container">
      <div className="chat-list-header">
        <h2>Chat</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="chat-list-content">

        {state.conversations.map((conv) => {
          const otherUser = getOtherUser(conv.participantIds);
          const lastMessage = state.messages.find(m => m.id === conv.lastMessageId);

          if (!otherUser) return null;

          return (
            <div
              key={conv.id}
              className={`chat-list-item ${state.activeConversationId === conv.id ? 'active' : ''}`}
              onClick={() => dispatch({ type: 'SET_ACTIVE_CONVERSATION', payload: conv.id })}
            >
              <div className="item-avatar-wrapper">
                <img src={otherUser.avatar} alt={otherUser.name} className="item-avatar" />
                {otherUser.status === 'online' && <span className="status-dot"></span>}
              </div>

              <div className="item-info">
                <div className="item-header">
                  <h4>{otherUser.name}</h4>
                  <span className="item-time">
                    {lastMessage ? formatTime(lastMessage.timestamp) : ''}
                  </span>
                </div>

                <div className="item-footer">
                  <p className="item-last-message">
                    {lastMessage?.content || 'No messages yet'}
                  </p>
                  {!!conv.unreadCount && (
                    <span className="unread-badge">{conv.unreadCount}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
