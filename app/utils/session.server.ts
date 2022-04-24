import bcrypt from 'bcrypt';
import { db } from './db.server';
import { createCookieSessionStorage, redirect } from '@remix-run/node';
import type { loginFields } from '~/types';

// login an existing user
export async function login({ username, password }: loginFields) {
  const user = await db.user.findUnique({
    where: {
      username,
    },
  });
  if (!user) return null;

  const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isCorrectPassword) return null;

  return user;
}

// register a new user
// TODO: add a user check to make sure logged in user is a S.U.
export async function register({ username, password }: loginFields) {
  const passwordHash = await bcrypt.hash(password, 10);
  const data = {
    email: 'tba',
    username,
    passwordHash,
    firstname: 'tba',
    lastname: 'tba',
  };
  return db.user.create({
    data,
  });
}

// get session secret
const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error('no session secret found');
}

// create session storage
const storage = createCookieSessionStorage({
  cookie: {
    name: 'AH_Tutoring_Login',
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 60,
    httpOnly: true,
  },
});

// create session
export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set('userId', userId);

  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  });
}
// get user session
export async function getUserSession(request: Request) {
  return await storage.getSession(request.headers.get('Cookie'));
}

// get user
export async function getUser(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get('userId');

  if (!userId || typeof userId !== 'string') return null;

  try {
    const user = await db.user.findUnique({
      where: { id: userId },
    });
    return user;
  } catch (err) {
    // TODO: do something meaningfull here
    console.log('ERROR LOGIN', err);
    return null;
  }
}

// logout user and destroy session
export async function logout(request: Request) {
  const session = await storage.getSession(request.headers.get('Cookie'));

  return redirect('/auth/logout', {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  });
}
