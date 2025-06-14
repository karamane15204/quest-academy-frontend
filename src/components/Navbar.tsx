
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#99CDD8' }}>
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold" style={{ color: '#657165' }}>
              E-Learn Platform
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-teal-600 transition-colors">Features</a>
            <a href="#courses" className="text-gray-700 hover:text-teal-600 transition-colors">Courses</a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
            <Button 
              variant="outline" 
              className="text-gray-700 hover:bg-gray-100"
              style={{ borderColor: '#E8B4B8' }}
              onClick={() => window.location.href = '/login'}
            >
              Sign In
            </Button>
            <Button 
              className="text-white hover:opacity-90"
              style={{ backgroundColor: '#99CDD8' }}
              onClick={() => window.location.href = '/signup'}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-teal-600 transition-colors">Features</a>
              <a href="#courses" className="text-gray-700 hover:text-teal-600 transition-colors">Courses</a>
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  className="text-gray-700 hover:bg-gray-100"
                  style={{ borderColor: '#E8B4B8' }}
                  onClick={() => window.location.href = '/login'}
                >
                  Sign In
                </Button>
                <Button 
                  className="text-white hover:opacity-90"
                  style={{ backgroundColor: '#99CDD8' }}
                  onClick={() => window.location.href = '/signup'}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
