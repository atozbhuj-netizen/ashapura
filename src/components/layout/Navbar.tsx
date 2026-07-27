import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeProvider';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Cars', path: '/fleet' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className={`text-2xl font-bold font-heading ${isScrolled || theme === 'dark' ? 'text-primary' : 'text-primary drop-shadow-md'}`}>
              Ashapura
            </span>
            <span className={`text-xl font-medium hidden sm:block ${isScrolled || theme === 'dark' ? 'text-slate-800 dark:text-white' : 'text-slate-800 drop-shadow-md'}`}>
              Travels
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  location.pathname === link.path 
                    ? 'text-primary font-semibold' 
                    : isScrolled ? 'text-slate-600 dark:text-slate-300' : 'text-slate-800 font-semibold drop-shadow-md'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300' : 'bg-white/20 hover:bg-white/30 text-slate-800 backdrop-blur-sm'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="tel:7069807339">
              <Button size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                7069807339
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-800 dark:text-white' : 'text-slate-800'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-t dark:border-slate-800">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-6 py-3 text-base font-medium border-b dark:border-slate-800 last:border-0 ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/5'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-6 pt-4">
              <a href="tel:7069807339" className="w-full block">
                <Button className="w-full gap-2">
                  <Phone className="w-5 h-5" />
                  Call 7069807339
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
