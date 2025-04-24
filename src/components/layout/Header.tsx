
import React from 'react';
import { Heading } from '../design-system/typography/Typography';
import { useTheme } from '../design-system/theme/ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title = "Design System" }) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="hidden sm:inline-block">
              <Heading as="h1" level="h5">
                {title}
              </Heading>
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/typography" className="text-sm font-medium transition-colors hover:text-primary">
              Typography
            </Link>
            <Link to="/inputs" className="text-sm font-medium transition-colors hover:text-primary">
              Inputs
            </Link>
            <Link to="/feedback" className="text-sm font-medium transition-colors hover:text-primary">
              Feedback
            </Link>
          </nav>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-secondary"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
