import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className="text-black hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </Link>
);

export const MobileNavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </Link>
);