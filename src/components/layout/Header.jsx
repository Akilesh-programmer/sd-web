import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY_INFO, NAV_ITEMS } from "../../constants";
import TopBar from "./TopBar";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <TopBar />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SD</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-primary-700">
                {COMPANY_INFO.name}
              </span>
              <span className="text-xs text-neutral-600">
                {COMPANY_INFO.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-neutral-700 hover:text-primary-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-neutral-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 py-2 ${
                    isActive(item.path)
                      ? "text-primary-600 font-semibold"
                      : "text-neutral-700 hover:text-primary-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
