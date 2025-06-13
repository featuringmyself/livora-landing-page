
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
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
            <h4 className="font-semibold mb-4">Coming Soon</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">Meal Plans</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Healthy Snacks</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Nutrition Guide</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-300">
              <li>hello@livora.health</li>
              <li>+91 98765 43210</li>
              <li className="pt-4">
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-green-400 transition-colors">Instagram</a>
                  <a href="#" className="hover:text-green-400 transition-colors">Twitter</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Livora. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
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
