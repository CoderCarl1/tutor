import { useActionData } from '@remix-run/react';
// import { redirect } from "@remix-run/node";
import { validateInput, badRequest } from '~/utils/helpers';
import { login, createUserSession } from '~/utils/session.server';

export const action = async ({ request }: { request: Request }) => {
  const form = await request.formData();
  // const loginType = form.get('loginType');
  const username = form.get('username')?.toString();
  const password = form.get('password')?.toString();

  if (!username || !password) {
    return badRequest({
      fieldErrors: {
        username: 'username is required',
        password: 'password is required',
      },
    });
  }

  const fields = { username, password };
  // TODO: add validation for either username OR email
  const fieldErrors = {
    username: validateInput('username', username, 3),
    password: validateInput('password', password, 6),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    console.log('<= fieldErrors => ', fieldErrors);
    return badRequest({ fieldErrors, fields });
  }
  // find user
  const user = await login({ username, password });

  // check user details are ok
  if (!user)
    return badRequest({
      fields,
      fieldErrors: { username: 'invalid credentials' },
    });
  // create user session
  return createUserSession(user.id, '/');

  //   case 'register': {
  //     console.log('inside the register');
  //     // check if user exists
  //     const userExists = await db.user.findUnique({ where: { username } });
  //     if (userExists)
  //       return badRequest({
  //         fields,
  //         fieldErrors: { username: `username ${username} already exists` },
  //       });
  //     // register a new user
  //     const newUser = await register({ username, password });
  //     if (!newUser)
  //       return badRequest({ fields, formError: 'Something went wrong' });
  //     // create user session
  //     return createUserSession(newUser.id, '/posts');
  //   }

  //   default: {
  //     return badRequest({ fields, formError: 'login type is not valid' });
  //   }
  // }
};

function Login() {
  const actionData = useActionData();

  return (
    <div>
      <h1>Login</h1>

      <form method="POST">
        <fieldset className="loginform">
          <legend>Login</legend>
          <div className="loginform__content">
            <div className="loginform__content__wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                defaultValue={actionData?.fields?.username}
              />
              {actionData?.fieldErrors?.username && (
                <div role="region" aria-live="assertive">
                  <p style={{ color: 'red' }}>
                    {actionData?.fieldErrors.username}
                  </p>
                </div>
              )}
            </div>
            <div className="loginform__content__wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                // TODO: update this to reflect a password reset option selected
                // autoComplete="new-password"
                autoComplete="current-password"
                defaultValue={actionData?.fields?.password}
              />
              {actionData?.fieldErrors?.password && (
                <div role="region" aria-live="assertive">
                  <p style={{ color: 'red' }}>
                    {actionData?.fieldErrors.password}
                  </p>
                </div>
              )}
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
