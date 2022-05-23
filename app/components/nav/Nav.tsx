import { User } from '@prisma/client';
import useToggle from '~/utils/useToggle';
import UseClickOutside from '~/utils/useClickOutside';
import UseKeyBoardNavigation from '~/utils/useKeyboard';
import Navlink from '~/components/NavLink/NavLink';

// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import SkipLink from '~/components/skiplink/skiplink';
import type { RefObject } from 'react';
import React from 'react';

export default function Nav({ user }: { user?: User }) {
  return (
    <header>
      <SkipLink skipTo="main" className="skip-link">
        <button type="button">Skip Navigation Links</button>
      </SkipLink>
      <nav className="nav">
        <a className="header__logo" href="/">
          Home
        </a>
        <ul>
          <li>
            <Navlink to="/about">About</Navlink>
          </li>
          <li>
            <Navlink to="/rules">Classroom Rules</Navlink>
          </li>
          {user ? (
            <UserNav user={user} />
          ) : (
            <li>
              <Navlink to="/auth/login">Login</Navlink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

function UserNav({ user }: { user?: User }) {
  return (
    <>
      <li>
        <Navlink to="/homework">Homework</Navlink>
      </li>
      <li>
        <Navlink to="/tutoring">Tutoring</Navlink>
      </li>
      <DropDown user={user} />
      <li></li>
    </>
  );
}

function DropDown({ user }: { user?: User }) {
  const { toggle: menuOpen, setToggleStatus: setMenuOpen } = useToggle(false);
  const navRef = UseClickOutside(
    setMenuOpen,
    menuOpen,
  ) as RefObject<HTMLDivElement>;

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function selectMenuItem() {
    closeMenu();
  }

  return (
    <div ref={navRef}>
      <button
        aria-haspopup="true"
        aria-controls="nav-dropdown__content"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen()}
        className="nav-dropdown__btn nav-dropdown__trigger"
      >
        Settings
      </button>
      <div
        role="menu"
        id="nav-dropdown__content"
        className="nav-dropdown__content"
        data-open={menuOpen}
      >
        <Navlink
          role="menuitem"
          className="nav-dropdown__content-item"
          to="/auth/user/profile"
          onClick={selectMenuItem}
        >
          Profile
        </Navlink>

        <Navlink
          role="menuitem"
          className="nav-dropdown__content-item"
          to="/auth/user/settings"
          onClick={selectMenuItem}
        >
          Settings
        </Navlink>
        <Navlink
          role="menuitem"
          className="nav-dropdown__content-item"
          to="/auth/user/schedule"
          onClick={selectMenuItem}
        >
          Schedule
        </Navlink>
        <Logout />

        {user && user.isAdmin && (
          <>
            <div className="nav-dropdown__seperator"></div>
            <Navlink
              to="/admin"
              role="menuitem"
              className="nav-dropdown__content-item admin_link"
            >
              Admin
            </Navlink>
          </>
        )}
      </div>
    </div>
  );
}

function Logout() {
  function handlePropogation(event: React.SyntheticEvent) {
    console.log('weeee', { event });
    // event.stopPropagation();
  }

  return (
    <form action="/auth/logout" method="POST">
      <button
        type="submit"
        className="nav-dropdown__content-item  nav_link btn row"
        onKeyDown={handlePropogation}
        onKeyUp={handlePropogation}
        onClick={handlePropogation}
      >
        Logout
      </button>
    </form>
  );
}
