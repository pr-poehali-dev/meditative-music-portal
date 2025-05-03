
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
                ЗМ
              </div>
              <h1 className="text-xl font-semibold dark:text-white">Звуки Медитации</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`${isActive('/') 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'}`}
            >
              Главная
            </Link>
            <Link 
              to="/music" 
              className={`${isActive('/music') 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'}`}
            >
              Музыка
            </Link>
            <Link 
              to="/events" 
              className={`${isActive('/events') 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'}`}
            >
              События
            </Link>
            <Link 
              to="/blog" 
              className={`${isActive('/blog') 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'}`}
            >
              Блог
            </Link>
            <Link 
              to="/shop" 
              className={`${isActive('/shop') 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'}`}
            >
              Магазин
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'}`}
            >
              О музыканте
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-slate-700 dark:text-slate-200"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-700 dark:text-slate-200"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="pt-4 pb-2 md:hidden flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`${isActive('/') 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/music" 
              className={`${isActive('/music') 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Музыка
            </Link>
            <Link 
              to="/events" 
              className={`${isActive('/events') 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              События
            </Link>
            <Link 
              to="/blog" 
              className={`${isActive('/blog') 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Блог
            </Link>
            <Link 
              to="/shop" 
              className={`${isActive('/shop') 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Магазин
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              О музыканте
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
