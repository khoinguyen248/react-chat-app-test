import React, { useRef, useEffect, useState } from 'react';
import { useChat } from '../../context/ChatContext';
import { formatTime } from '../../utils/formatTime';
import { FiSend, FiPaperclip, FiSmile, FiAlertCircle, FiChevronDown, FiBell } from 'react-icons/fi';
import './ChatWindow.css';

// Bước 10: Tách hook "cho ngầu" giống sinh viên khoe kĩ năng
const useAutoScroll = (dependencies: any[]) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, dependencies);
  return bottomRef;
};

const ChatWindow: React.FC = () => {
  const { state, dispatch } = useChat();
  const [inputText, setInputText] = useState('');

  const currentConversation = state.conversations.find(c => c.id === state.activeConversationId);

  let otherUser = null;
  let otherUserId: string | undefined;

  if (currentConversation) {
    otherUserId = currentConversation.participantIds.find((id) => id !== '1');
    otherUser = state.users.find((u) => u.id === otherUserId);
  }


  const messages = state.messages.filter(
    (m) => m.conversationId === state.activeConversationId
  );

  const messagesEndRef = useAutoScroll([messages]);

  const handleSendMessage = () => {
    if (!inputText.trim() || !currentConversation) return;

    const newMessage = {
      id: `m_${Date.now()}`,
      conversationId: currentConversation.id,
      senderId: '1', // current user
      content: inputText.trim(),
      timestamp: new Date().toISOString(),
    };

    dispatch({ type: 'SEND_MESSAGE', payload: newMessage });
    setInputText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!currentConversation || !otherUser) {
    return (
      <div className="chat-window empty-state">
        <FiAlertCircle size={40} style={{ marginBottom: 10, color: '#94A3B8' }} />
        <p>Chọn một người để bắt đầu nói chuyện thôi nào!</p>
      </div>
    );
  }

  return (
    <>
      <div className="chat-window__header">


        <div className="chat-window__header-actions">
          <button className="status-button" type="button">
            <span>Status: Sale</span>
            <FiChevronDown className="status-icon" />
          </button>

          <button className="notification-button" type="button" aria-label="Notifications">
            <FiBell />
          </button>
        </div>
      </div>
      <div className="chat-window">

        {/* HEADER */}
        <div className="chat-window-header">
          <div className="header-info">
            <h3>{otherUser.name}</h3>
            <p>Trạng thái: {otherUser.status}</p>
          </div>
        </div>

        {/* MESSAGE LIST */}
        <div className="chat-messages">
          {messages.map((msg) => {
            const isSender = msg.senderId === '1';
            const senderObj = state.users.find((u) => u.id === msg.senderId);

            return (
              <div key={msg.id} className={`message-item ${isSender ? 'sent' : 'received'}`}>
                {!isSender && (
                  <img src={senderObj?.avatar} alt="Avatar" className="message-avatar" />
                )}
                <div className="message-content">
                  <div className="message-bubble">
                    {msg.content}
                  </div>
                  <span className="message-time">{formatTime(msg.timestamp)}</span>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT AREA */}
        <div className="chat-input-area">
          <div className="input-actions-top">
            <button className="btn-outline">REQUEST VISIT</button>
            <button className="btn-outline">MAKE OFFER</button>
          </div>
          <div className="input-wrapper">
            <button className="btn-icon emoji-btn">
              <FiSmile />
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="btn-icon">
              <FiPaperclip />
            </button>
            <button className="btn-send" onClick={handleSendMessage}>
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </>

  );
};

export default ChatWindow;
