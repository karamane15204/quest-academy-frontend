
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-orange-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FA991C 0%, #1C768F 100%)' }}>
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #032539 0%, #1C768F 100%)' }}>
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
              className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
              onClick={() => window.location.href = '/login'}
            >
              Sign In
            </Button>
            <Button 
              className="text-white"
              style={{ background: 'linear-gradient(135deg, #FA991C 0%, #1C768F 100%)' }}
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
          <div className="md:hidden py-4 border-t border-orange-200">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-teal-600 transition-colors">Features</a>
              <a href="#courses" className="text-gray-700 hover:text-teal-600 transition-colors">Courses</a>
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
                  onClick={() => window.location.href = '/login'}
                >
                  Sign In
                </Button>
                <Button 
                  className="text-white"
                  style={{ background: 'linear-gradient(135deg, #FA991C 0%, #1C768F 100%)' }}
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
