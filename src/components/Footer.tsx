export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 text-sm px-6 pt-12 pb-8 md:px-16">
        <div className="max-w-7xl mx-auto space-y-12">
  
          {/* Link Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Product</h4>
              <ul className="space-y-2">
                <li><a href="/resumes" className="hover:text-white transition">Build Resume</a></li>
                <li><a href="/pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="/features" className="hover:text-white transition">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
                <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Support</h4>
              <ul className="space-y-2">
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
                <li><a href="/help" className="hover:text-white transition">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="/security" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-700"></div>
  
          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} GenieResumay. All rights reserved.</p>
              <p className="text-gray-500 mt-1">Empowering students and freshers to launch their careers with confidence.</p>
            </div>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
            </div>
          </div>
  
        </div>
      </footer>
    );
  }
  