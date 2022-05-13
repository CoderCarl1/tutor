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
import React from 'react';

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
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="nav-dropdown__btn nav-dropdown__trigger">
        Settings
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        loop
        sideOffset={3}
        className="nav-dropdown__content"
        onEscapeKeyDown={closeMenu}
        onPointerDownOutside={closeMenu}
      >
        <DropdownMenu.Item className="nav-dropdown__item">
          <NavLink to="/auth/user/profile" onClick={selectMenuItem}>
            Profile
          </NavLink>
        </DropdownMenu.Item>
        {/* <DropdownMenu.Item className="nav-dropdown__item">
          <NavLink to="/auth/user/settings" onClick={selectMenuItem}>
            Settings
          </NavLink>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="nav-dropdown__item">
          <NavLink to="/auth/user/schedule" onClick={selectMenuItem}>
            Schedule
          </NavLink>
        </DropdownMenu.Item> */}
        {/* <DropdownMenu.Separator /> */}
        {/* {user && user.isAdmin && <AdminNav />} */}
        {/* <DropdownMenu.Separator className="nav-dropdown__seperator" /> */}
        {/* <DropdownMenu.Item className="nav-dropdown__item logout">
          <Logout />
        </DropdownMenu.Item> */}
        {/* <DropdownMenu.Arrow className="nav-dropdown__arrow" /> */}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );

  // TODO: refer to check if anything missing
  // return (
  //   <li>
  //     <div ref={navRef} className="nav-dropdown__container">
  //       <button
  //         className="nav-dropdown__trigger"
  //         onClick={openMenu}
  //         onKeyDown={openMenu}
  //         aria-controls="User-Settings"
  //         aria-expanded={menuOpen ? 'true' : 'false'}
  //       >
  //         menuOpen
  //       </button>
  //       <ul
  //         className="nav-dropdown__content"
  //         data-open={menuOpen ? 'true' : 'false'}
  //         ref={optionsRef}
  //         id="User-Settings"
  //       >
  //         <li className="nav-dropdown__item">
  //           <NavLink
  //             tabIndex={-1}
  //             onClick={selectMenuItem}
  //             onKeyDown={selectMenuItem}
  //             to="/auth/user/profile"
  //             id="testid"
  //           >
  //             Profile
  //           </NavLink>
  //         </li>
  //         <li className="nav-dropdown__item">
  //           <NavLink
  //             tabIndex={-1}
  //             onClick={selectMenuItem}
  //             onKeyDown={selectMenuItem}
  //             to="/auth/user/settings"
  //           >
  //             Settings
  //           </NavLink>
  //         </li>
  //         <li className="nav-dropdown__item">
  //           <NavLink
  //             tabIndex={-1}
  //             onClick={selectMenuItem}
  //             onKeyDown={selectMenuItem}
  //             to="/auth/user/schedule"
  //           >
  //             Schedule
  //           </NavLink>
  //         </li>

  //         {/* <li className="nav-dropdown__item logout">
  //           <Logout  tabIndex={-1} />
  //         </li> */}
  //       </ul>
  //     </div>
  //   </li>
  // );
}
