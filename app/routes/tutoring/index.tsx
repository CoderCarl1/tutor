import { Outlet } from 'remix';
import Chat from '~/components/chat/chat';
import { LinksFunction } from '@remix-run/react/routeModules';
import ChatStyles from '~/styles/components/chat/chat.css';
import TutorPageStyles from '~/styles/pages/tutoring/tutoring.css';

export const links: LinksFunction = () => {
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
};

export default function tutoring() {
  return (
    <div className="tutor-wrapper">
      <Outlet />
      <Chat />
    </div>
  );
}
