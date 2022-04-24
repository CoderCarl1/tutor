import { getUser } from '~/utils/session.server';
import { LoaderFunction, redirect } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);

  if (!user) {
    // TODO: add logging when this happens
    return redirect('/');
  }
  // TODO: find homework that has the same userID as user.id
  const data = { user };
  return data;
};

export default function Homework() {
  return (
    <div>
      <h1>Rules page</h1>
    </div>
  );
}
