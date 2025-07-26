import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">S</span>
              </div>
              <div>
                <h3 className="font-bold">SQUARE</h3>
                <p className="text-sm opacity-75">SIGNS</p>
              </div>
            </div>
            <p className="text-sm opacity-75 mb-4">
              © 2025 Square Signs LLC<br />
              All rights reserved.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-75 hover:opacity-100">Products</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100">Templates</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100">Design Tool</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100">Blog</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100">Sitemap</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100">FAQ</a></li>
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="font-semibold mb-4">Corporate</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-75 hover:opacity-100">Corporate Offers</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100">Refer a Friend</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100">Affiliate Program</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100">About Us</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100">Contact Us</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100">Terms & Policies</a></li>
            </ul>
          </div>

          {/* Contact & Trust */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-sm space-y-2 mb-6">
              <p>3520 Valinaire Dr.</p>
              <p>Durbank, CA 91566-1126</p>
              <p>+1 (844) 833-4455</p>
              <p>support@squaresigns.com</p>
            </div>

            <div>
              <h5 className="font-semibold mb-2">We are social</h5>
              <div className="flex gap-3">
                <Facebook className="w-5 h-5 opacity-75 hover:opacity-100 cursor-pointer" />
                <Twitter className="w-5 h-5 opacity-75 hover:opacity-100 cursor-pointer" />
                <Linkedin className="w-5 h-5 opacity-75 hover:opacity-100 cursor-pointer" />
                <Instagram className="w-5 h-5 opacity-75 hover:opacity-100 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Payment & Trust Badges */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h5 className="font-semibold mb-2">We accept</h5>
              <div className="flex gap-4 text-sm">
                <span className="opacity-75">VISA</span>
                <span className="opacity-75">AMEX</span>
                <span className="opacity-75">PAYPAL</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-2">Trust matters</h5>
              <div className="flex gap-4 text-sm">
                <span className="opacity-75">SECURE</span>
                <span className="opacity-75">BRAINTREE</span>
                <span className="opacity-75">NORTON</span>
                <span className="opacity-75">TRUSTPILOT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};