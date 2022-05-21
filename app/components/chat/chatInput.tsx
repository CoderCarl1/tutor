import React, { useRef } from 'react';
import type { message } from '~/types';

type chatInputTypes = {
  emitMessage: () => void;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  userName: string;
};

export default function ChatInput({
  emitMessage,
  setMessage,
  message,
}: chatInputTypes) {
  const messageRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (messageRef.current === null) return;
    emitMessage();
  }

  function handleTextChange() {
    if (messageRef.current === null) return;
    setMessage(messageRef.current!.value);
  }

  return (
    <form action="" onSubmit={handleSubmit} className="chat__form">
      <label htmlFor="message" className="sr-only">
        message
      </label>
      <input
        placeholder={` message ${String.fromCharCode(10147)}`}
        type="text"
        value={message}
        onChange={() => handleTextChange()}
        name="message"
        ref={messageRef}
      />
    </form>
  );
}
