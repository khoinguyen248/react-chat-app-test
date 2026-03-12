import type { ChatState } from '../context/chatReducer';
import type { User, Message, Conversation } from '../types';

//người dùng
export const mockUsers: User[] = [
  { id: '1', name: 'Jimi Hendrix', avatar: 'https://i.pravatar.cc/150?u=1', status: 'online' },
  { id: '2', name: 'Hali', avatar: 'https://i.pravatar.cc/150?u=2', status: 'online' },
  { id: '3', name: 'Hurin omar', avatar: 'https://i.pravatar.cc/150?u=3', status: 'offline' },
  { id: '4', name: 'Victor Erixon', avatar: 'https://i.pravatar.cc/150?u=4', status: 'offline' },
];
//ds trò chuyện
export const mockConversations: Conversation[] = [
  { id: 'c1', participantIds: ['1', '2'], lastMessageId: 'm2', unreadCount: 0 },
  { id: 'c2', participantIds: ['1', '3'], lastMessageId: 'm3', unreadCount: 5 },
  { id: 'c3', participantIds: ['1', '4'], lastMessageId: 'm4', unreadCount: 3 },
];
//tin nhắn
export const mockMessages: Message[] = [
  {
    id: 'm1',
    conversationId: 'c1',
    senderId: '1',
    content: 'We invite you at our office for visit',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 'm2',
    conversationId: 'c1',
    senderId: '2',
    content: 'Welcome',
    timestamp: new Date().toISOString(),
  },
  {
    id: 'm3',
    conversationId: 'c2',
    senderId: '3',
    content: 'Sure 8:pm',
    timestamp: new Date().toISOString(),
  },
  {
    id: 'm4',
    conversationId: 'c3',
    senderId: '4',
    content: 'New Project for you',
    timestamp: new Date().toISOString(),
  },
];
//state tổng
export const mockState: ChatState = {
  users: mockUsers,
  conversations: mockConversations,
  messages: mockMessages,
  activeConversationId: 'c1',
};
