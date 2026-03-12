import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';
import { chatReducer, initialState } from './chatReducer';
import type { ChatState, ChatAction } from './chatReducer';
import { loadFromStorage, saveToStorage } from '../utils/localStorage';
import { mockState } from '../data/mockData';

interface ChatContextType {
  state: ChatState;
  dispatch: React.Dispatch<ChatAction>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);


const initChatState = (): ChatState => {

  const data = loadFromStorage<ChatState>('chat_app_state');
  if (data && data.users.length > 0) return data;
  saveToStorage('chat_app_state', mockState)
  return mockState as ChatState;
};

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState, initChatState);


  useEffect(() => {
    saveToStorage('chat_app_state', state);
  }, [state]);

  return <ChatContext.Provider value={{ state, dispatch }}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChat must be used within a ChatProvider');
  return context;
};
