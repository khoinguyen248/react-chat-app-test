import { ChatProvider } from './context/ChatContext';
import ChatLayout from './layouts/ChatLayout';
import './index.css';

function App() {
  return (

    <ChatProvider>
      <ChatLayout></ChatLayout>
    </ChatProvider>
  );
}

export default App;
