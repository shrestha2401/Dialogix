import create from 'zustand';

interface ConversationState {
  selectedConversation: string | null; 
  messages: any[];
}

interface ConversationActions extends ConversationState {
  setSelectedConversation: (selectedConversation: string | null) => void;
  setMessages: (messages: any[]) => void;
}

const useConversation = create<ConversationActions>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
