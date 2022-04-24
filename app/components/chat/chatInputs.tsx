import React, { useRef } from 'react';
import type { message } from '~/types';

type chatInputTypes = {
  emitMessage: () => void;
  setMessage: React.Dispatch<React.SetStateAction<message>>;
  message: message;
  userName: string;
};

export default function ChatInputs({
  emitMessage,
  setMessage,
  message,
  userName = '',
}: chatInputTypes) {
  const messageRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (userName === null) throw new Error('no user name');
    if (messageRef.current === null || messageRef.current.value.trim() === '')
      return;
    emitMessage();
  }

  function handleTextChange() {
    // TODO: make it so that it allows the user to clear ALL content
    if (messageRef.current === null || messageRef.current.value.trim() === '')
      return;
    if (userName === null) return;

    console.log('text is changed');

    setMessage({
      msg: messageRef.current.value,
      userName: userName,
    });
  }

  return (
    <form action="" onSubmit={handleSubmit} className="chat__form">
      <label htmlFor="message" className="sr-only">
        message
      </label>
      <input
        placeholder={` message ${String.fromCharCode(10147)}`}
        type="text"
        value={message.msg}
        onChange={handleTextChange}
        name="message"
        ref={messageRef}
      />
    </form>
  );
}
