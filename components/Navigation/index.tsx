import { useState } from "react";
import { Popover } from "react-tiny-popover";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NAVIGATION_LINKS } from "@/constants";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface NavigationProps {
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-slate-700"
    >
      {children}
    </Link>
  );
};

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleClickPopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="bg-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-white">
                Harry Potter
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {NAVIGATION_LINKS.map((link) => {
                  if (link.children) {
                    return (
                      <Popover
                        key={link.label}
                        isOpen={isPopoverOpen}
                        positions={["top", "bottom", "left", "right"]}
                        onClickOutside={handleClickPopover}
                        content={
                          <div className="flex flex-col gap-2 bg-slate-900 p-4 rounded-md">
                            {link.children.map((child) => (
                              <NavLink key={child.href} href={child.href}>
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        }
                      >
                        <div
                          className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-slate-700 hover:cursor-pointer"
                          onClick={handleClickPopover}
                        >
                          {link.label} <ChevronDown width={16} height={16} />
                        </div>
                      </Popover>
                    );
                  }
                  return (
                    <NavLink key={link.href} href={link.href}>
                      {link.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default Navigation;
