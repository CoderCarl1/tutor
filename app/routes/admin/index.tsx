import { Outlet } from 'remix';
import AdminNav from '~/components/adminNav/AdminNav';
// import { useActionData } from 'remix';
// import { badRequest } from '~/utils/helpers';
// import { db } from '~/utils/db.server';

import { getUser } from '~/utils/session.server';
import { LoaderFunction, redirect } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);

  if (!user || !user.isAdmin) {
    // TODO: add logging when this happens
    return redirect('/');
  }
  const data = { user };
  return data;
};

// TODO: add action so that can create users and show all users

export default function AdminIndex() {
  return (
    <AdminLayout>
      <h1>Admin index</h1>
      <Outlet />
    </AdminLayout>
  );
}

type adminLayoutProps = {
  children?: React.ReactNode;
};
function AdminLayout({ children }: adminLayoutProps) {
  return (
    <div className="container">
      <AdminNav />
      <article>{children}</article>
    </div>
  );
}
