
import { BookOpen, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1A0530' }} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#DA1A68' }}>
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">E-Learn Platform</span>
            </div>
            <p className="text-gray-300">
              Empowering learners worldwide with innovative educational technology and interactive learning experiences.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Learning Modes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learning Modes</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Video Courses</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Interactive Games</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Assessments</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Certifications</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 E-Learn Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
