import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Início', path: '/inicio' },
    { name: 'Autoavaliação', path: '/autoavaliacao' },
    { name: 'Registro de Humor', path: '/registro-humor' },
    { name: 'Dicas', path: '/dicas' },
    { name: 'Agendamento', path: '/agendamento' },
    { name: 'Suporte', path: '/suporte' }
  ];

  const isActive = (path) => {
    if (path === '/inicio' && location.pathname === '/') return true;
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-1">
              <img src="/logo.png" alt="Mente Leve Logo" className="h-6 w-6 rounded-full shadow-lg" />  
              <span className="text-xl font-semibold text-gray-900">Mente Leve</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

