import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '~/components/errors/ErrorFallback';
import ChatMessage from '~/components/chat/chatMessage';
import ChatInputs from '~/components/chat/chatInputs';
import type { message, serverMsg } from '~/types';

const socket = io('http://localhost:4000/');

export default function Chat() {
  // TODO - update this to get USER from global State;
  const [userName, setUserName] = useState('');

  const [message, setMessage] = useState<message>({
    userName: '',
    msg: '',
  });
  const [chat, setChat] = useState<message[]>([]);
  const [serverMsg, setServerMsg] = useState<serverMsg | null>(null);

  useEffect(() => {
    setMessage((message) => Object.assign({}, message, { userName: userName }));
  }, [userName]);

  useEffect(() => {
    socket.on('serverMsg', (msg) => setServerMsg(msg));
    socket.on('message', ({ userName, msg }) => {
      setChat((prev) => prev?.concat({ userName, msg }));
      setMessage((message) => Object.assign({}, message, { msg: '' }));
    });
  }, []);

  useEffect(() => {
    // TODO - scroll the chat to the last chat
    const chats = document?.querySelectorAll('.chat__message');
    const chatCount = chats.length;
    const lastChat = chats[chatCount - 1] as HTMLElement;
    // const chatWrapper = document?.querySelector(
    //   '.chat__content__wrapper',
    // ) as HTMLElement;
    // TODO: last chat identifier is working. just have to scroll the chat
    // refer to https://jsfiddle.net/xj5c3jcn/1/
    console.log({ lastChat });
    // chatWrapper?.scrollTop(lastChat.outerHeight());
  }, [chat]);

  function emitMessage() {
    const { userName, msg } = message;
    socket.emit('message', { userName, msg });
  }

  function errorHandler(error: Error, errorInfo: { componentStack: string }) {
    console.log('LOGGING', { error }, { errorInfo });
  }
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => errorHandler(error, errorInfo)}
    >
      <div className="chat__wrapper">
        <h2 className="chat__title">Chat</h2>
        <div className="chat__content__wrapper">
          {chat &&
            chat.map(({ userName, msg }, idx) => (
              <ChatMessage key={`chat${idx}`} userName={userName} text={msg} />
            ))}
        </div>
        <label htmlFor="username">userName: </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          name="username"
        />
        <ChatInputs
          emitMessage={emitMessage}
          setMessage={setMessage}
          message={message}
          userName={userName}
        />

        {serverMsg && serverMsg}
      </div>
    </ErrorBoundary>
  );
}
