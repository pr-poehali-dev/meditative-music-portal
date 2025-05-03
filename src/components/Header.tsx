
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
              ЗМ
            </div>
            <h1 className="text-xl font-semibold dark:text-white">Звуки Медитации</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400">Главная</a>
            <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400">Музыка</a>
            <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400">События</a>
            <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400">Блог</a>
            <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400">Магазин</a>
            <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400">Контакты</a>
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
            <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400">Главная</a>
            <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400">Музыка</a>
            <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400">События</a>
            <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400">Блог</a>
            <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400">Магазин</a>
            <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400">Контакты</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
