import { User } from '@prisma/client';
import useToggle from '~/utils/useToggle';
import { NavLink, Link } from '@remix-run/react';
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import SkipLink from '~/components/skiplink/skiplink';
import React, { useCallback, useEffect, useRef } from 'react';

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

function UserNav({ user }: { user: User }) {
  function closeDropdown() {}
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
      <DropDown />
      <li>
        {/* <DropdownMenu.Root>
          <DropdownMenu.Trigger className="nav-dropdown__btn nav-dropdown__trigger">
            Settings
          </DropdownMenu.Trigger>

          <DropdownMenu.Content
            loop
            sideOffset={3}
            className="nav-dropdown__content"
          >
            <DropdownMenu.Item className="nav-dropdown__item">
              <Link to="/auth/user/profile" onClick={closeDropdown}>
                Profile
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="nav-dropdown__item">
              <Link to="/auth/user/settings" onClick={closeDropdown}>
                Settings
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="nav-dropdown__item">
              <Link to="/auth/user/schedule" onClick={closeDropdown}>
                Schedule
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            {user.isAdmin && <AdminNav />}
            <DropdownMenu.Separator className="nav-dropdown__seperator" />
            <DropdownMenu.Item className="nav-dropdown__item logout">
              <Logout />
            </DropdownMenu.Item>
            <DropdownMenu.Arrow className="nav-dropdown__arrow" />
          </DropdownMenu.Content>
        </DropdownMenu.Root> */}
      </li>
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

function DropDown() {
  const { toggle: menuOpen, setToggleStatus: setMenuOpen } = useToggle(false);
  // const menuRef = useRef<HTMLDivElement | null>(null);

  function openMenu() {
    setMenuOpen(true);
  }

  function selectMenuItem() {
    setMenuOpen(false);
  }

  // const handleMenuState = useCallback(() => {
  //   console.log('func called');
  //   setMenuOpen();
  // }, [setMenuOpen]);

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function closeMenu() {
      setMenuOpen(false);
    }

    function outsideClickHandler(event: MouseEvent) {
      const target = event.target as HTMLElement;

      if (!navRef.current?.contains(target) && menuOpen) {
        closeMenu();
        return;
      }
    }

    document.addEventListener('mousedown', outsideClickHandler, true);

    return () => {
      document.removeEventListener('mousedown', outsideClickHandler, true);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <li>
      <div ref={navRef} className="nav-dropdown__container">
        <button className="nav-dropdown__trigger" onClick={() => setMenuOpen()}>
          Settings TEST menuOpen
        </button>
        <ul
          className="nav-dropdown__content"
          data-open={menuOpen ? 'true' : 'false'}
        >
          <li className="nav-dropdown__item">
            <NavLink
              tabIndex={-1}
              onClick={selectMenuItem}
              to="/auth/user/profile"
            >
              Profile
            </NavLink>
          </li>
          <li className="nav-dropdown__item">
            <NavLink
              tabIndex={-1}
              onClick={selectMenuItem}
              to="/auth/user/settings"
            >
              Settings
            </NavLink>
          </li>
          <li className="nav-dropdown__item">
            <NavLink
              tabIndex={-1}
              onClick={selectMenuItem}
              to="/auth/user/schedule"
            >
              Schedule
            </NavLink>
          </li>

          {/* <li className="nav-dropdown__item logout">
            <Logout  tabIndex={-1} />
          </li> */}
        </ul>
      </div>
    </li>
  );
}
