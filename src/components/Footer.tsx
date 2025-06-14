
import { BookOpen, Facebook, Twitter, Instagram, Mail, Heart, Star, Smile } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-blue-800 to-indigo-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">🌟 E-Learn Fun Zone</span>
            </div>
            <p className="text-purple-100 text-lg">
              🎮 Making learning super fun for kids all around the world! 
              Join us for amazing adventures in education! 🚀
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors shadow-lg">
                <Facebook className="h-5 w-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-sky-400 rounded-full flex items-center justify-center hover:bg-sky-500 cursor-pointer transition-colors shadow-lg">
                <Twitter className="h-5 w-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 cursor-pointer transition-colors shadow-lg">
                <Instagram className="h-5 w-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors shadow-lg">
                <Mail className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-yellow-300">🔗 Quick Links</h3>
            <ul className="space-y-3 text-purple-100">
              <li><a href="#" className="hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform inline-block">🏠 Home</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform inline-block">📚 Courses</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform inline-block">🎈 About Us</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform inline-block">📞 Contact</a></li>
            </ul>
          </div>

          {/* Learning Modes */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-yellow-300">🎮 Fun Learning</h3>
            <ul className="space-y-3 text-purple-100">
              <li><a href="#" className="hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform inline-block">🎥 Video Courses</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform inline-block">🎲 Educational Games</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform inline-block">📝 Fun Quizzes</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform inline-block">🏆 Certificates</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-yellow-300">🆘 Help & Support</h3>
            <ul className="space-y-3 text-purple-100">
              <li><a href="#" className="hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform inline-block">❓ Help Center</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform inline-block">📖 Guide</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform inline-block">👥 Community</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors text-lg font-medium hover:scale-105 transform inline-block">🔒 Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-purple-600 mt-8 pt-8 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Heart className="h-6 w-6 text-pink-400 animate-pulse" />
            <Star className="h-6 w-6 text-yellow-400 animate-pulse" />
            <Smile className="h-6 w-6 text-green-400 animate-pulse" />
          </div>
          <p className="text-purple-200 text-lg font-medium">
            © 2024 E-Learn Fun Zone. Made with ❤️ for amazing kids everywhere! 🌈
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
