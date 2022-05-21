import { Link, Outlet } from '@remix-run/react';
import Chat from '~/components/chat/chat';
import ChatStyles from '~/styles/components/chat/chat.css';
import TutorPageStyles from '~/styles/pages/tutoring/tutoring.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: ChatStyles,
    },
    {
      rel: 'stylesheet',
      href: TutorPageStyles,
    },
  ];
}

export default function tutoring() {
  return (
    <div className="tutor-wrapper">
      <Outlet />
      <Link to="/tutoring/cards">Cards</Link>
      <Chat />
    </div>
  );
}
