import { User } from '@prisma/client';

export type message = {
  userName: string;
  message: string;
};

export type serverMsg = {
  message: string;
};

export type loginFields = {
  username: string;
  password: string;
};

export type fieldErrors = {
  username?: string;
  password?: string;
};
export type badRequestProps = {
  fieldErrors: fieldErrors;
  fields?: loginFields;
};

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
  key: string | undefined;
};
