import { NavLink, RemixNavLinkProps } from 'remix';

export default function Navlink({
  href,
  children,
  className,
  prefetch = 'intent',
  ...props
}: RemixNavLinkProps) {
  return (
    <NavLink
      to={href}
      {...props}
      className={className + ' nav_link btn row'}
      prefetch={prefetch}
    >
      {children}
    </NavLink>
  );
}
