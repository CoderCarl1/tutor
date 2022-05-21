import {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import io from 'socket.io-client';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '~/components/errors/ErrorFallback';
import ChatMessage from '~/components/chat/chatMessage';
import ChatInput from '~/components/chat/chatInput';
import type { message } from '~/types';
import { useMatches } from '@remix-run/react';
import { User } from '@prisma/client';

const socket = io('http://localhost:4000/');

function useChatRoom() {
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<message[]>([]);

  function receiveMessage({ userName, message }: message) {
    setChat((prev) => prev?.concat({ userName, message }));
  }

  function emitMessage() {
    if (message.length < 1) return;
    if (!userName) throw new Error('no user name');
    socket.emit('message', { userName, message });
    setMessage('');
  }
  return {
    setUserName,
    receiveMessage,
    emitMessage,
    message,
    setMessage,
    chat,
  };
}

function ChatParent({ children }: { children: React.ReactNode }) {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    setShowChat(true);
  }, []);

  if (!showChat) {
    // TODO: make this be a toggle only.

    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return <div className="chat__wrapper">{children}</div>;
}

function ChatRoom() {
  const { user } = useMatches()[0].data as { user: User };

  const {
    setUserName,
    receiveMessage,
    emitMessage,
    message,
    setMessage,
    chat,
  } = useChatRoom();
  const containerRef = useRef() as MutableRefObject<HTMLDivElement | null>;

  useEffect(() => {
    setUserName(user.username);
  }, []);

  useEffect(() => {
    socket.on('message', ({ userName, message }) =>
      receiveMessage({ userName, message }),
    );
  }, [socket]);

  useLayoutEffect(() => {
    scrollToBottom();
  });

  function scrollToBottom() {
    if (containerRef.current === null) return;

    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }

  return (
    <>
      <h2 className="chat__title">Chat</h2>
      <div ref={containerRef} className="chat__content__wrapper">
        {chat &&
          chat.map(({ userName, message }, idx) => (
            <ChatMessage
              key={`chat${idx}`}
              username={userName}
              text={message}
            />
          ))}
      </div>

      <ChatInput
        emitMessage={emitMessage}
        setMessage={setMessage}
        message={message}
        userName={user.username}
      />
    </>
  );
}

export default function Chat() {
  function errorHandler(error: Error, errorInfo: { componentStack: string }) {
    console.log('LOGGING', { error }, { errorInfo });
  }
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => errorHandler(error, errorInfo)}
    >
      <ChatParent>
        <ChatRoom />
      </ChatParent>
    </ErrorBoundary>
  );
}
