import { User } from '@prisma/client';
import useToggle from '~/utils/useToggle';
import { NavLink } from '@remix-run/react';
import UseClickOutside from '~/utils/useClickOutside';
import UseKeyBoardNavigation from '~/utils/useKeyboard';
import type { HTMLElementEvent } from '~/types';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import AdminNav from '../adminNav/AdminNav';

// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import SkipLink from '~/components/skiplink/skiplink';
import React, { RefObject } from 'react';

export default function Nav({ user }: { user?: User }) {
  return (
    <header>
      <SkipLink skipTo="main" className="skip-link">
        <button type="button">Skip Navigation Links</button>
      </SkipLink>
      <nav className="nav">
        <NavLink className="header__logo" to="/" prefetch="intent">
          Home
        </NavLink>
        <ul>
          <li>
            <NavLink className="nav_link btn row" to="/about" prefetch="intent">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link btn row" to="/rules" prefetch="intent">
              Classroom Rules
            </NavLink>
          </li>
          {user ? (
            <UserNav user={user} />
          ) : (
            <li>
              <NavLink className="btn row" to="/auth/login" prefetch="intent">
                Login
              </NavLink>
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
        <NavLink className="nav_link btn row" to="/homework" prefetch="intent">
          Homework
        </NavLink>
      </li>
      <li>
        <NavLink className="nav_link btn row" to="/tutoring" prefetch="intent">
          Tutoring
        </NavLink>
      </li>
      <DropDown user={user} />
      <li></li>
    </>
  );
}

// function AdminNav() {
//   return (
//     <DropdownMenu.Item className="nav-dropdown__item">
//       <NavLink className="nav_link btn row" to="/admin" prefetch="intent">
//         Admin
//       </NavLink>
//     </DropdownMenu.Item>
//   );
// }

function Logout() {
  function handlePropogation(event: React.SyntheticEvent) {
    console.log('weeee', { event });
    // event.stopPropagation();
  }

  return (
    <form action="/auth/logout" method="POST">
      <button
        type="submit"
        className="nav-dropdown__btn"
        onKeyDown={handlePropogation}
        onKeyUp={handlePropogation}
        onClick={handlePropogation}
      >
        Logout
      </button>
    </form>
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
        <NavLink
          role="menuitem"
          className="nav-dropdown__content-item"
          to="/auth/user/profile"
          onClick={selectMenuItem}
        >
          Profile
        </NavLink>

        <NavLink
          role="menuitem"
          className="nav-dropdown__content-item"
          to="/auth/user/settings"
          onClick={selectMenuItem}
        >
          Settings
        </NavLink>
        <NavLink
          role="menuitem"
          className="nav-dropdown__content-item"
          to="/auth/user/schedule"
          onClick={selectMenuItem}
        >
          Schedule
        </NavLink>
        {user && user.isAdmin && <AdminNav />}
        <Logout />
      </div>
    </div>
  );
}
