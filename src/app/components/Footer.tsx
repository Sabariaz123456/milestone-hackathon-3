export default function Footer(){
    return(
        <div>
       <footer className="bg-gray-800 text-white py-8">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* About Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">About Glow & Glam</h3>
        <p className="text-gray-400 text-sm">
          Glow & Glam is your ultimate beauty destination. We provide expert tips, tutorials, product reviews, and the latest beauty trends to help you look and feel your best. From skincare secrets to makeup magic, we’ve got everything you need to glow with confidence.
        </p>
      </div>

      {/* Links Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/skincare" className="text-gray-400 hover:text-white">Skincare</a></li>
          <li><a href="/makeup" className="text-gray-400 hover:text-white">Makeup</a></li>
          <li><a href="/haircare" className="text-gray-400 hover:text-white">Haircare</a></li>
          <li><a href="/wellness" className="text-gray-400 hover:text-white">Wellness</a></li>
          <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 border-t border-gray-700 pt-6">
      <p className="text-center text-gray-400 text-sm">&copy; 2024 Glow & Glam. All rights reserved.</p>
    </div>
  </div>
</footer>

        </div>
    )
}