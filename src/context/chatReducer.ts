import type { User, Message, Conversation } from '../types';

export interface ChatState {
  users: User[];
  conversations: Conversation[];
  messages: Message[];
  activeConversationId: string | null;
}

export type ChatAction =
  | { type: 'HYDRATE_INITIAL_DATA'; payload: ChatState }
  | { type: 'SET_ACTIVE_CONVERSATION'; payload: string }
  | { type: 'SEND_MESSAGE'; payload: Message };

export const initialState: ChatState = {
  users: [],
  conversations: [],
  messages: [],
  activeConversationId: null,
};

export const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    //nhận
    case 'HYDRATE_INITIAL_DATA':

      return { ...state, ...action.payload };
    //chuyển
    case 'SET_ACTIVE_CONVERSATION':
      return { ...state, activeConversationId: action.payload };
    //gửi
    case 'SEND_MESSAGE': {
      const newMessage = action.payload;

      const updatedMessages = [...state.messages, newMessage];

      const updatedConversations = state.conversations.map((conversation) => {
        const isCurrentConversation = conversation.id === newMessage.conversationId;

        if (!isCurrentConversation) {
          return conversation;
        }

        return {
          ...conversation,
          lastMessageId: newMessage.id,
        };
      });

      return {
        ...state,
        messages: updatedMessages,
        conversations: updatedConversations,
      };
    }

    default:
      return state;
  }
};
