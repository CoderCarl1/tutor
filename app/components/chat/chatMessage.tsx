// TODO: Style the chats

export default function ChatMessage({
  username,
  text,
}: {
  username: string;
  text: string;
}) {
  return (
    <p className="chat__message">
      <span
        style={{
          textTransform: 'uppercase',
          fontSize: '0.8rem',
          fontWeight: 'bold',
        }}
      >
        {username}
      </span>
      :{' '}
      <span
        style={{
          textTransform: 'uppercase',
          color: 'rgb(0 0 0 / 80%)',
          fontSize: '1.1rem',
        }}
      >
        {text}
      </span>
    </p>
  );
}
