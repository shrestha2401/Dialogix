import create from 'zustand';

interface Conversation {
  _id: string;
  profilePic: string;
  fullName:string
}

interface ConversationState {
  selectedConversation: Conversation | null; 
  messages: any[];
}

interface ConversationActions extends ConversationState {
  setSelectedConversation: (selectedConversation: Conversation | null) => void;
  setMessages: (messages: any[]) => void;
}

const useConversation = create<ConversationActions>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
