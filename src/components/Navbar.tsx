
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Menu, X, Star } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b-4 border-pink-200 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              🌟 E-Learn Fun Zone 🌟
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-lg font-semibold text-purple-700 hover:text-pink-600 transition-colors hover:scale-110 transform duration-200">🎮 Features</a>
            <a href="#courses" className="text-lg font-semibold text-purple-700 hover:text-pink-600 transition-colors hover:scale-110 transform duration-200">📚 Courses</a>
            <a href="#about" className="text-lg font-semibold text-purple-700 hover:text-pink-600 transition-colors hover:scale-110 transform duration-200">🎈 About</a>
            <a href="#contact" className="text-lg font-semibold text-purple-700 hover:text-pink-600 transition-colors hover:scale-110 transform duration-200">📞 Contact</a>
            <Button 
              variant="outline" 
              className="border-3 border-pink-400 text-pink-600 hover:bg-pink-500 hover:text-white rounded-xl px-6 py-3 text-lg font-bold shadow-lg hover:scale-105 transform transition-all duration-200"
              onClick={() => window.location.href = '/login'}
            >
              🚪 Sign In
            </Button>
            <Button 
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl px-6 py-3 text-lg font-bold shadow-lg hover:scale-105 transform transition-all duration-200"
              onClick={() => window.location.href = '/signup'}
            >
              ⭐ Get Started!
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-purple-600 hover:text-pink-600 w-12 h-12"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t-2 border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50 rounded-b-2xl">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-lg font-semibold text-purple-700 hover:text-pink-600 transition-colors text-center py-2">🎮 Features</a>
              <a href="#courses" className="text-lg font-semibold text-purple-700 hover:text-pink-600 transition-colors text-center py-2">📚 Courses</a>
              <a href="#about" className="text-lg font-semibold text-purple-700 hover:text-pink-600 transition-colors text-center py-2">🎈 About</a>
              <a href="#contact" className="text-lg font-semibold text-purple-700 hover:text-pink-600 transition-colors text-center py-2">📞 Contact</a>
              <div className="flex flex-col space-y-3 pt-4 px-4">
                <Button 
                  variant="outline" 
                  className="border-3 border-pink-400 text-pink-600 hover:bg-pink-500 hover:text-white rounded-xl py-3 text-lg font-bold shadow-lg"
                  onClick={() => window.location.href = '/login'}
                >
                  🚪 Sign In
                </Button>
                <Button 
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl py-3 text-lg font-bold shadow-lg"
                  onClick={() => window.location.href = '/signup'}
                >
                  ⭐ Get Started!
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
