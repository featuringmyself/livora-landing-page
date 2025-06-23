import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Livora</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              India's first AI-powered health meal subscription service. We're on a mission to make 
              healthy eating effortless, personalized, and delicious for every Indian household.
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-2">Founded by nutrition enthusiasts who believe</p>
              <p>healthy food should be accessible to everyone.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Coming Soon</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">Meal Plans</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Healthy Snacks</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Nutrition Guide</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Get in Touch</h4>
            <ul className="space-y-2 text-gray-300">
              <li>info@livoralife.com</li>
              <li>+91 70736 02690</li>
              <li className="pt-4">
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/livoraindia" className="hover:text-green-400 transition-colors">Instagram</a>
                  <a href="https://www.facebook.com/livoraIndia" className="hover:text-green-400 transition-colors">Facebook</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Livora. All rights reserved.
            </div>
            <div className="flex flex-nowrap space-x-6 text-xs whitespace-nowrap text-gray-400">
              <Link to="/privacy-policy" className="hover:text-green-400  transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-green-400 transition-colors">Terms of Service</Link>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>Secured by Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
