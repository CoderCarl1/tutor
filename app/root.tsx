import { Links, LiveReload, Meta, Outlet, Scripts, useLoaderData } from 'remix';
import type { MetaFunction } from 'remix';
import { LinksFunction } from '@remix-run/react/routeModules';
import { getUser } from './utils/session.server';
import Nav from '~/components/nav/Nav';
import global from '~/styles/global.css';
export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/LOGO256.png',
      type: 'image/png',
    },
    {
      rel: 'stylesheet',
      href: global,
    },

    // {
    //   rel: "preload",
    //   href: "/images/banner.jpg",
    //   as: "image",
    // },
  ];
};
export const meta: MetaFunction = () => {
  // TODO: update these
  const charset = 'utf-8';
  const title = 'AH Tutoring';
  const viewport = 'width=device-width,initial-scale=1';
  const description = 'A tutoring App';
  const keywords = 'tutoring, tutor, maths, linguistics';

  return {
    charset,
    title,
    viewport,
    description,
    keywords,
  };
};

export const loader = async ({ request }: { request: Request }) => {
  const user = await getUser(request);
  const data = {
    user,
  };

  return data;
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
        <Scripts />
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  // TODO: update this
  // 1. append for Logging
  // 2. make meaningful page
  console.log('HERE HAPPENED', { error });
  return (
    <Document>
      <Layout>
        <h1>ERROR boundary in ROOT!</h1>
        <pre>{error.message}</pre>
      </Layout>
    </Document>
  );
}
type documentProps = {
  children?: React.ReactNode;
  title?: string;
};

function Document({ children, title }: documentProps) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>{title ? title : 'Autha Test'}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}

type layoutProps = {
  children?: React.ReactNode;
};
function Layout({ children }: layoutProps) {
  const { user } = useLoaderData();

  return (
    <div className="container">
      {user ? <Nav user={user} /> : <Nav />}
      <main>{children}</main>
      <footer>
        <p style={{ textAlign: 'center' }}>Copyright &copy; AH tutoring 2022</p>
      </footer>
    </div>
  );
}
